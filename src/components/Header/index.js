import React from "react";
import classes from "./Header.module.css";
import NavBar from "../NavBar";

export default function Header(props) {
  return (
    <div className={classes.main}>
      <NavBar></NavBar>
      <div>
        {props.editing ? (
          <input className={classes.h1} type="text" value={props.title} onChange={e => props.setTitle(e)} />
        ) : (
          <h1>{props.title}</h1>
        )}
        <hr className={classes.small} />
        {props.editing ? (
          <input className={classes.p} type="text" value={props.title} onChange={e => props.setSubtitle(e)} />
        ) : (
          <p>{props.subtitle}</p>
        )}
      </div>
    </div>
  );
}
