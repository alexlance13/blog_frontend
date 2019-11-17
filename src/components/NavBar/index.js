import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/auth";

class NavBar extends Component {
  render() {
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
            {this.props.isLoggedIn && (
              <li>
                <NavLink to="/post-edit/5dd052eb46471726995ebefe">ADD POST</NavLink>
              </li>
            )}
            {this.props.isLoggedIn && (
              <li>
                <NavLink to="/my-posts">MY POSTS</NavLink>
              </li>
            )}
            <li>{this.props.user.isAdmin && <NavLink to="/admin">ADMIN</NavLink>}</li>
            <li>
              {this.props.isLoggedIn ? (
                <NavLink to="/" onClick={() => this.props.logOut()}>
                  LOG OUT
                </NavLink>
              ) : (
                <NavLink to="/authorization">AUTHORIZATION</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
