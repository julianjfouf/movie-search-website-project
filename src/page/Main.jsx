import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Main.css";
import MyLogo from "../assets/movie website logo.png";
import SearchIcon from "@mui/icons-material/Search";

const Main = () => {
  const [input, setInput] = useState();
  const navigate = useNavigate()

  function onSearch(e) {
    e.preventDefault();
    navigate(`/${input}`)
  }

  console.log(input)

  return (
    <div className="main">
      <div className="container">
        <img src={MyLogo} alt="website-logo" />
        <form className="main__form">
          <button onClick={(e) => onSearch(e)} className="form__button" type="submit">
            <SearchIcon />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="searchInput__form"
            type="text"
            placeholder="Search movies..."
          />
        </form>
      </div>
    </div>
  );
};

export default Main;
