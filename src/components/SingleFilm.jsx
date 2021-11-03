import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const SingleFilm = (props) => {
  const [film, setFilm] = useState({});
  const { filmid } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
      .then((response) => response.json())
      .then((data) => setFilm(data));
  }, [filmid]);

  return (
    <div className="row">
      <div className="col-6" key={film.id}>
        <div class="card">
          <div class="card-body">
            <img
              src={film.movie_banner}
              alt="poster from movie"
              class="card-img-top"
            />
            <h5 class="card-title">{film.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{film.original_title}</h6>
            <p class="card-text">{film.description}</p>
            <p class="card-text">{film.director}</p>
            <p class="card-text">{film.producer}</p>
            <p class="card-text">{film.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFilm;
