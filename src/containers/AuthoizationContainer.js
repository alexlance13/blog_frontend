import React, { Component } from 'react';
import Authorization from '../components/Authorization';
import { loginUser, registerUser } from '../store/actions/auth';
import { connect } from 'react-redux';
import * as Yup from 'yup';

class AuthorizationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  registerButtonHandler = async ({ login, password }) => {
    const res = await this.props.registerUser(login, password);
    if (!res) this.props.history.push('/');
  };

  loginButtonHandler = async ({ login, password }) => {
    const res = await this.props.loginUser(login, password);
    if (!res) this.props.history.push('/');
  };

  render() {
    const signupSchema = Yup.object().shape({
      login: Yup.string()
        .min(5, 'Too Short!')
        .max(16, 'Too Long!')
        .required('Required'),
      password: Yup.string()
        .min(5, 'Too Short!')
        .max(32, 'Too Long!')
        .required('Required'),
    });
    return (
      <Authorization
        registerButtonHandler={this.registerButtonHandler}
        loginButtonHandler={this.loginButtonHandler}
        login={this.state.login}
        password={this.state.password}
        signupSchema={signupSchema}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (login, password) => dispatch(loginUser(login, password)),
    registerUser: (login, password) => dispatch(registerUser(login, password)),
  };
}

export default connect(null, mapDispatchToProps)(AuthorizationContainer);
