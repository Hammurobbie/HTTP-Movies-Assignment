import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
  name: "",
  director: "",
  metascore: "",
  stars: []
};

const MovieForm = props => {
  console.log(props);

  const [movie, setMovie] = useState(initialMovie);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch(err => alert(err.message));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then(res => {
        console.log(res.data);
        setMovie(res.data);
        props.history.push(`/movies/${movie.id}`);
      })
      .catch(err => alert(err.message));
    // return <Redirect to="/" />;
  };
  const handleChange = e => {
    e.preventDefault();
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={movie.title}
      />
      <input
        name="director"
        placeholder="director"
        onChange={handleChange}
        value={movie.director}
      />
      <input
        name="metascore"
        placeholder="metascore"
        onChange={handleChange}
        value={movie.metascore}
      />
      <input
        name="stars"
        placeholder="stars"
        onChange={handleChange}
        value={movie.stars}
      />
      <button>Update</button>
    </form>
  );
};

export default MovieForm;
