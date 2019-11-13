import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { fetchPosts } from "../../store/actions/posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  likeClickHandler = (id, isLiked) => {
    this.props.like(id, this.props.token, isLiked);
  };

  render() {
    const { token, userId, posts, home, loading, admin } = this.props;
    const id = this.props.id || userId;
    return (
      <Posts
        admin={admin}
        loading={loading}
        posts={home ? posts : posts.filter(post => post.owner._id === id)}
        userId={userId}
        token={token}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    userId: state.auth.userId,
    token: state.auth.token,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
