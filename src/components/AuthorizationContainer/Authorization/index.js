import React, { useState } from "react";
import Header from "../../Header";
import classes from "./Authorization.module.css";
import { NavLink } from "react-router-dom";

const Authorization = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Header title="Authorization" />
      <div className={classes.auth}>
        <h2>Log in / Sign up </h2>
        <div className="form-group">
          <label htmlFor="usr">Name:</label>
          <input
            type="text"
            className="form-control"
            id="usr"
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.buttons}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.registerButtonHandler(login, password);
              setLogin("");
              setPassword("");
            }}
          >
            <NavLink to="/">Sign up</NavLink>
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => {
              props.loginButtonHandler(login, password);
              setLogin("");
              setPassword("");
            }}
          >
            <NavLink to="/">Log in</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
