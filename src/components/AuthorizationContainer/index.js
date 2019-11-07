import React, { Component } from "react";
import Authorization from "./Authorization";
import { loginUser, registerUser } from "../../store/actions/auth";
import { connect } from "react-redux";

class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  registerButtonHandler = (login, password) => this.props.registerUser(login, password);

  loginButtonHandler = (login, password) => this.props.loginUser(login, password);

  render() {
    return (
      <Authorization
        registerButtonHandler={this.registerButtonHandler}
        loginButtonHandler={this.loginButtonHandler}
        login={this.state.login}
        password={this.state.password}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (login, password) => dispatch(loginUser(login, password)),
    registerUser: (login, password) => dispatch(registerUser(login, password))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorizationContainer);
