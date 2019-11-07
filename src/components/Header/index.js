import React from "react";
import classes from "./Header.module.css";
import NavBar from "../NavBar";

export default function Header(props) {
  return (
    <div className={classes.main}>
      <NavBar></NavBar>
      <div>
        <h1>{props.head}</h1>
        <hr className={classes.small} />
        <p>{props.neck}</p>
      </div>
    </div>
  );
}
