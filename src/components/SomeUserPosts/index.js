import React, { Component } from "react";
import Posts from "../PostsContainer";
import Header from "../Header";
import { connect } from "react-redux";
import { getUser } from "../../store/actions/users";

class SomeUserPosts extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Header
          title={`Posts maded by ${this.props.user.login}`}
          subtitle={`Here you can see ${this.props.user.login}'s posts`}
        ></Header>
        <Posts id={this.props.match.params.id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: id => dispatch(getUser(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SomeUserPosts);
