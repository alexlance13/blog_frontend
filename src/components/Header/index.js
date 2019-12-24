import React from 'react';
import classes from './Header.module.css';
import NavBar from '../NavBar';

export default function Header(props) {
  const {editing, onChangeHandler, title, subtitle } = props;
  return (
    <div className={classes.main}>
      <NavBar></NavBar>
      <div>
        {editing ? (
          <input
            placeholder="Title"
            className={classes.h1}
            type="text"
            value={title}
            onChange={(e) => onChangeHandler('title', e.target.value)}
          />
        ) : (
          <h1>{title}</h1>
        )}
        <hr className={classes.small} />
        {editing ? (
          <input
            placeholder="Subtitle"
            className={classes.p}
            type="text"
            value={subtitle}
            onChange={(e) => onChangeHandler('subtitle', e.target.value)}
          />
        ) : (
          <p>{subtitle}</p>
        )}
      </div>
    </div>
  );
}
