import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "../components/Posts";
import { fetchPosts, like } from "../store/actions/posts";

class PostsContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  likeClickHandler = (id, isLiked) => {
    this.props.like(id, isLiked);
  };

  render() {
    const { userId, posts, home, loading, admin } = this.props;
    const id = this.props.id || userId;
    return (
      <Posts
        onApproveHandle={this.props.onApproveHandle}
        onRemoveHandle={this.props.onRemoveHandle}
        admin={admin}
        loading={loading}
        likeClickHandler={this.likeClickHandler}
        posts={home ? posts : posts.filter(post => post.owner._id === id)}
        userId={userId}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    userId: state.auth.userId,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    like: (postId, isLiked) => dispatch(like(postId, isLiked))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
