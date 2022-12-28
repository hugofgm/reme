import { useState } from "react";
import "./nav.css";
import rememberLogo from "../Assets/rememberlogo.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="body">
      <div className="banner">
        <img className="logo" src={rememberLogo} />
      </div>
      <ul>
        <li>
          <Link className="link" to="/events">
            <a href="#home">Events</a>
          </Link>
        </li>
        <li>
          <Link className="link" to="/create_event">
            <a href="#news">New Event</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
