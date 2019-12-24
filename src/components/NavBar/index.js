import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/auth';
import Menu from '../Menu';

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
          <Menu
            isAdmin={this.props.user.isAdmin}
            isLoggedIn={this.props.isLoggedIn}
            logOut={this.props.logOut}
          />
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(logOut()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
