import { Avatar, Button } from "@mui/material";
import React from "react";
import MovieIcon from "@mui/icons-material/Movie";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TheatersIcon from "@mui/icons-material/Theaters";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import QuizIcon from "@mui/icons-material/Quiz";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile__info">
          <Avatar src="data:image/jpeg;base64,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" />
          <h3>
            <MovieIcon />
            Username
          </h3>
        </div>
        <div className="profile__email">
          <p>Email@email.com</p>
        </div>
      </div>
      <div className="movie__options">
        <div className="movie__option">
          <Button className="iconButton active">
            <HomeIcon />
            Home
          </Button>
        </div>
        <div className="movie__option">
          <Button className="iconButton inactive">
            <SearchIcon className="inactiveIcon" />
            Explore
          </Button>
        </div>
        <div className="movie__option">
          <Button className="iconButton inactive">
            <TheatersIcon />
            In Theaters
          </Button>
        </div>
        <div className="movie__option">
          <Button className="iconButton inactive">
            <NewReleasesIcon />
            New Releases
          </Button>
        </div>
        <div className="movie__option">
          <Button className="iconButton inactive">
            <UpcomingIcon />
            Coming Soon
          </Button>
        </div>
      </div>
      <div className="profile__options">
        <div className="movie__option">
          <Button className="iconButton inactive">
            <SettingsIcon />
            Settings
          </Button>
        </div>
        <div className="movie__option">
          <Button className="iconButton inactive">
            <HelpIcon />
            Help
          </Button>
        </div>
        <div className="movie__option">
          <Button className="iconButton inactive">
            <ContactMailIcon />
            Contact Us
          </Button>
        </div>
        <div className="movie__option">
          <Button className="iconButton inactive">
            <QuizIcon />
            FAQ
          </Button>
        </div>
      </div>
      <div className="logoutContainer">
        <Button className="iconButton inactive">
          <LogoutIcon className="logoutText__container" />
          <p className="logoutText">Logout</p>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
