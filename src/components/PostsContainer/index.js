import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts } from "../../store/actions/posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <Posts
        loading={this.props.loading}
        posts={this.props.posts}
        userId={this.props.userId}
        token={this.props.token}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    userId: state.auth.userId,
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
