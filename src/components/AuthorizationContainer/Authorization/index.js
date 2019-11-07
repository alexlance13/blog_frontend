import React, { useState } from "react";
import Header from "../../Header";
import classes from "./Authorization.module.css";

const Authorization = props => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Header head="Authorization" />
      <div className={classes.auth}>
        <h2>Log in / Sign up </h2>
        <div class="form-group">
          <label for="usr">Name:</label>
          <input
            type="text"
            class="form-control"
            id="usr"
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className={classes.buttons}>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              props.registerButtonHandler(login, password);
              setLogin("");
              setPassword("");
            }}
          >
            Sign up
          </button>
          <button
            type="button"
            class="btn btn-info"
            onClick={() => {
              props.loginButtonHandler(login, password);
              setLogin("");
              setPassword("");
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
