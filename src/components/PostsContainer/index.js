import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts, like } from "../../store/actions/posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  likeClickHandler = (id, isLiked) => {
    this.props.like(id, this.props.token, isLiked);
  };

  render() {
    return (
      <Posts
        likeClickHandler={this.likeClickHandler}
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
    singlePost: state.posts.singlePost,
    loading: state.posts.loading,
    userId: state.auth.userId,
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    like: (id, token, isLiked) => dispatch(like(id, token, isLiked))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsContainer);
