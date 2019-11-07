import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import SinglePost from "./SinglePost";

async function fetchPost(id) {
  const response = await Axios.get(`http://localhost:3333/posts/${id}`);
  return response.data;
}

class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentsOpened: false,
      isNewCommentPosted: false,
      post: []
    };
  }

  async componentDidMount() {
    const post = await fetchPost(this.props.match.params.id);
    this.setState({
      post: post
    });
  }

  async componentDidUpdate() {
    const post = await fetchPost(this.props.match.params.id);
    this.setState({
      post: post
    });
  }

  submitHandler = async commentData => {
    try {
      const headers = {
        "content-type": "application/json",
        authorization: `Bearer ${this.props.token}`
      };
      const response = await Axios.post(
        "http://localhost:3333/comment",
        { text: commentData, postId: this.state.post._id },
        { headers }
      );
      this.setState({
        isCommentsOpened: true,
        isNewCommentPosted: true,
        post: response.data
      });
      setTimeout(() => {
        this.setState({
          isNewCommentPosted: false
        });
      }, 2000);
    } catch (e) {
      console.error("Sending comment error:", e);
    }
  };

  removeCommentHandler = async id => {
    try {
      const headers = {
        "content-type": "application/json",
        authorization: `Bearer ${this.props.token}`
      };
      await Axios.delete(`http://localhost:3333/comment/${id}`, { headers });
    } catch (e) {
      console.error("Remove comment error", e);
    }
  };

  commentClickHandler = () => this.setState({ isCommentsOpened: !this.state.isCommentsOpened });

  render() {
    return (
      <SinglePost
        post={this.state.post}
        userId={this.props.userId}
        commentClickHandler={this.commentClickHandler}
        token={this.props.token}
        isCommentsOpened={this.state.isCommentsOpened}
        isNewCommentPosted={this.state.isNewCommentPosted}
        removeCommentHandler={this.removeCommentHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    userId: state.auth.userId,
    token: state.auth.token
  };
}

export default connect(mapStateToProps)(SinglePostContainer);
