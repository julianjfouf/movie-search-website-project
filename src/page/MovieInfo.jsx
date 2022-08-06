import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./MovieInfo.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import imdbIDLogo from "../assets/imdb img.png";

const MovieInfo = () => {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState();
  const [movieInfo, setMovieInfo] = useState([]);
  const navigate = useNavigate();

  async function showInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=86637aa7&i=${imdbID}`
    );
    setMovieInfo(data);
    setLoading(false);
  }

  useEffect(() => {
    showInfo();
  }, []);

  console.log(movieInfo);

  return (
    <div className="movieInfo">
      <IconButton className="backButton" onClick={() => navigate("/")}>
        <ArrowBackIcon /> Home
      </IconButton>
      {loading ? (
        <div className="movieInfo__container">
          <div className="movieInfo__postWrapper">
            <img
              src="https://www.colorhexa.com/808080.png"
              alt=""
              className="movieInfo__poster--skeleton"
            />
          </div>
          <div className="movieInfo__info">
            <img
              src="https://www.colorhexa.com/808080.png"
              className="movieInfo__Title--skeleton"
            ></img>
            <div className="movieInfo__genre">
              <img
                src="https://www.colorhexa.com/808080.png"
                className="movieInfo__Type--skeleton"
              ></img>
            </div>
            <img
              src="https://www.colorhexa.com/808080.png"
              className="movieInfo__Year--skeleton"
            ></img>
            <br />
            <img
              src="https://www.colorhexa.com/808080.png"
              className="movieInfo__Length--skeleton"
            ></img>
            <br />
            <img
              src="https://www.colorhexa.com/808080.png"
              className="movieInfo__Director--skeleton"
            ></img>
            <br />
            <img
              src="https://www.colorhexa.com/808080.png"
              className="movieInfo__Cast--skeleton"
            ></img>
            <br />
            <img
              src="https://www.colorhexa.com/808080.png"
              className="movieInfo__Summary--skeleton"
            ></img>
          </div>
        </div>
      ) : (
        <div className="movieInfo__container">
          <div className="movieInfo__posterWrapper">
            <img
              src={`${movieInfo.Poster}`}
              className="movieInfo__poster"
            ></img>
          </div>
          <div className="movieInfo__info">
            <h1 className="movieInfo__title">{movieInfo.Title}</h1>
            <div className="movieInfo__genre">
              <img className="imdb-logo" src={imdbIDLogo} alt="" />{" "}
              <h2>: {movieInfo.imdbRating}</h2>
            </div>
            <h3 className="movieInfo__year">
              <b>Release Date:</b> {movieInfo.Released}
            </h3>
            <h4 className="movieInfo__length"><b>Runtine:</b> {movieInfo.Runtime}</h4>
            <h5 className="movieInfo__director">
              <b>Director:</b> {movieInfo.Director}
            </h5>
            <h5 className="movieInfo__cast"><b>Cast:</b> {movieInfo.Actors}</h5>
            <p className="movieInfo__summary"><b>Summary:</b> {movieInfo.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
