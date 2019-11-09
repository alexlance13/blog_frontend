import React, { Component } from "react";
import { connect } from "react-redux";
import SinglePost from "./SinglePost";
import { fetchSinglePost, setComment, removeComment, like } from "../../store/actions/posts";

class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentsOpened: false,
      isNewCommentPosted: false
    };
  }

  componentDidMount() {
    this.props.fetchSinglePost(this.props.match.params.id);
  }

  submitHandler = async commentData => {
    this.props.setComment(this.props.match.params.id, commentData, this.props.token);
    this.setState({
      isCommentsOpened: true,
      isNewCommentPosted: true
    });
    setTimeout(() => {
      this.setState({
        isNewCommentPosted: false
      });
    }, 2000);
  };

  removeCommentHandler = async id => {
    this.props.removeComment(id, this.props.token);
  };

  commentClickHandler = () => this.setState({ isCommentsOpened: !this.state.isCommentsOpened });

  likeClickHandler = (id, isLiked) => {
    this.props.like(id, this.props.token, isLiked);
  };

  render() {
    return (
      <SinglePost
        post={this.props.singlePost}
        userId={this.props.userId}
        commentClickHandler={this.commentClickHandler}
        token={this.props.token}
        isCommentsOpened={this.state.isCommentsOpened}
        isNewCommentPosted={this.state.isNewCommentPosted}
        removeCommentHandler={this.removeCommentHandler}
        submitHandler={this.submitHandler}
        likeClickHandler={this.likeClickHandler}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.posts.singlePost,
    userId: state.auth.userId,
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSinglePost: id => dispatch(fetchSinglePost(id)),
    like: (postId, token, isLiked) => dispatch(like(postId, token, isLiked)),
    removeComment: (id, token) => dispatch(removeComment(id, token)),
    setComment: (postId, text, token) => dispatch(setComment(postId, text, token))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePostContainer);
