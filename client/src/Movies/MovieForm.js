import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const MovieForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/movies")
      .then(res => {
        console.log(res);
      })
      .catch(err => alert(err.message));
    // return <Redirect to="/" />;
  };
  const handleChange = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="title" onChange={handleChange} />
      <input name="director" placeholder="director" onChange={handleChange} />
      <input name="metascore" placeholder="metascore" onChange={handleChange} />
      <input name="stars" placeholder="stars" onChange={handleChange} />
      <button>Update</button>
    </form>
  );
};

export default MovieForm;
