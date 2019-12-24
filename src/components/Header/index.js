import React from 'react';
import classes from './Header.module.css';
import NavBar from '../NavBar';

export default function Header(props) {
  return (
    <div className={classes.main}>
      <NavBar></NavBar>
      <div>
        {props.editing ? (
          <input
            placeholder="Title"
            className={classes.h1}
            type="text"
            value={props.title}
            onChange={(e) => props.onChangeHandler('title', e.target.value)}
          />
        ) : (
          <h1>{props.title}</h1>
        )}
        <hr className={classes.small} />
        {props.editing ? (
          <input
            placeholder="Subtitle"
            className={classes.p}
            type="text"
            value={props.subtitle}
            onChange={(e) => props.onChangeHandler('subtitle', e.target.value)}
          />
        ) : (
          <p>{props.subtitle}</p>
        )}
      </div>
    </div>
  );
}
