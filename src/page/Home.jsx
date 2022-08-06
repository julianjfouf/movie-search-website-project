import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Home.css";
import MyLogo from "../assets/movie website logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import axios from "axios";

const Home = () => {
  const { input } = useParams();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState(input);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();

  function onSearch(e) {
    navigate(`/${input}`);
  }

  console.log(searchInput);

  async function getMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=${
        searchInput || input
      }`
    );
    setMovies(data.Search);
    console.log(movies);
    setLoading(false);
  }

  async function updateMovies(e) {
    setLoading(true);
    e.preventDefault();
    const { data } = await axios.get(
      `https://omdbapi.com/?i=tt3896198&apikey=86637aa7&s=${searchInput}`
    );
    setMovies(data.Search);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  if (movies === false) {
    document.querySelector(
      ".movies__container"
    ).innerHTML = `Sorry, there were no results`;
  }

  return (
    <>
      <div className="home">
        <div className="home__header">
          <img
            onClick={() => navigate("/")}
            className="website__img"
            src={MyLogo}
            alt="website-logo"
          />
          <form>
            <button
              onClick={(e) => updateMovies(e)}
              className="form__button"
              type="submit"
            >
              <SearchIcon />
            </button>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="searchInput__form"
              type="text"
              placeholder="Search movies..."
            />
          </form>
        </div>
        <div className="movies__container">
          {loading && !movies ? (
            new Array(6).fill(0).map((response) => (
              <div className="movie">
                <img
                  src="https://www.colorhexa.com/808080.png"
                  alt=""
                  className="movie__poster--skeleton"
                />
                <img
                  src="https://www.colorhexa.com/808080.png"
                  className="movie__Title--skeleton"
                ></img>
                <img
                  src="https://www.colorhexa.com/808080.png"
                  className="movie__Year--skeleton"
                ></img>
                <img
                  src="https://www.colorhexa.com/808080.png"
                  className="movie__Type--skeleton"
                ></img>
              </div>
            ))
          ) : movies ? (
            movies
              .map((response) => (
                <div
                  className="movie"
                  onClick={() => navigate(`${response.imdbID}`)}
                  key={response.imdbID}
                >
                  <img
                    src={`${response.Poster}`}
                    alt=""
                    className="movie__poster"
                  />
                  <h2 className="movie__Title">{response.Title}</h2>
                  <h4 className="movie__Year">{response.Year}</h4>
                  <p className="movie__Type">{response.Type}</p>
                </div>
              ))
              .slice(0, 6)
          ) : (
            <h1 className="sorry-message">Sorry, no results...</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
