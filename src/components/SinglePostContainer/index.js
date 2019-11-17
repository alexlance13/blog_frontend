import React, { Component } from "react";
import { connect } from "react-redux";
import SinglePost from "./SinglePost";
import { fetchSinglePost, setComment, removeComment, like, removePost } from "../../store/actions/posts";

class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentsOpened: false,
      isNewCommentPosted: false
    };
  }

  componentDidMount() {
    this.props.match
      ? this.props.fetchSinglePost(this.props.match.params.id)
      : this.props.fetchSinglePost(this.props.id);
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

  removeCommentHandler = id => {
    this.props.removeComment(id, this.props.token);
  };

  commentClickHandler = () => this.setState({ isCommentsOpened: !this.state.isCommentsOpened });

  likeClickHandler = (id, isLiked) => {
    this.props.like(id, this.props.token, isLiked);
  };

  postRemoveHandler = () => {
    this.props.removePost(this.props.singlePost._id, this.props.token);
  };

  render() {
    return (
      <SinglePost
        onChangeHandler={this.onChangeHandler}
        onSave={this.props.onSave}
        postId={this.props.postId}
        createPostHandler={this.props.createPostHandler}
        isCreating={this.props.isCreating}
        user={this.props.user}
        postRemoveHandler={this.postRemoveHandler}
        updatePostHandler={this.props.updatePostHandler}
        subtitle={this.props.subtitle}
        title={this.props.title}
        setSubtitle={this.props.setSubtitle}
        setTitle={this.props.setTitle}
        text={this.props.text}
        onBlurHandler={this.props.onBlurHandler}
        isEditing={this.props.isEditing}
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
    token: state.auth.token,
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSinglePost: id => dispatch(fetchSinglePost(id)),
    like: (postId, token, isLiked) => dispatch(like(postId, token, isLiked)),
    removeComment: (id, token) => dispatch(removeComment(id, token)),
    removePost: (id, token) => dispatch(removePost(id, token)),
    setComment: (postId, text, token) => dispatch(setComment(postId, text, token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);
