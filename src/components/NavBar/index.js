import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={classes.main}>
      <nav className={classes.navBar}>
        <div>
          <NavLink exact to="/">
            Your diary
          </NavLink>
        </div>
        <ul className={classes.links}>
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/">MY POSTS</NavLink>
          </li>
          <li>
            <NavLink to="/authorization">AUTHORIZATION</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
