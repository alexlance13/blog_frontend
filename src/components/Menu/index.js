import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import windowSize from 'react-window-size';
import useOutsideClick from '../../helpers/useOutsideClick';

const Menu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (props.windowWidth < 768) {
      setIsMenuOpen(false);
    }
  }, [props.windowWidth]);

  useOutsideClick(ref, () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(!isMenuOpen);
  });
  return (
    <div className={classes.main}>
      {props.windowWidth < 768 && !isMenuOpen && (
        <button className={classes.burger} onClick={() => setIsMenuOpen(true)}>
          <GiHamburgerMenu />
        </button>
      )}
      <ul
        ref={ref}
        className={classes.links}
        style={
          props.windowWidth > 768 ? { width: 'auto' } : isMenuOpen ? { width: '200px' } : { width: '0px' }
        }
      >
        {isMenuOpen && props.windowWidth < 768 && (
          <li>
            <button className={classes.close} onClick={() => setIsMenuOpen(false)}>
              x
            </button>
          </li>
        )}
        <li>
          <NavLink exact to="/">
            HOME
          </NavLink>
        </li>
        {props.isLoggedIn && (
          <li>
            <NavLink to="/post-edit/5ded74cb4323972c772c37a9">ADD POST</NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink to="/my-posts">MY POSTS</NavLink>
          </li>
        )}
        <li>{props.isAdmin && <NavLink to="/admin">ADMIN</NavLink>}</li>
        <li>
          {props.isLoggedIn ? (
            <NavLink to="/" onClick={() => props.logOut()}>
              LOG OUT
            </NavLink>
          ) : (
            <NavLink to="/authorization">AUTHORIZATION</NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};
// }
export default windowSize(Menu);
