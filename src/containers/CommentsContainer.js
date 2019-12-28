import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comments from '../components/Comments';
import { removeCommentFromSinglePostHandler } from '../store/actions/posts';
import { removeCommentFromAdminHandler, approveComment, getComments } from '../store/actions/comments';

class CommentsContainer extends Component {
  componentDidMount() {
    if (this.props.adminPanel) this.props.getComments();
  }

  removeCommentFromSinglePostHandler = (id) => {
    this.props.removeCommentFromSinglePostHandler(id);
  };

  removeCommentFromAdminHandler = (id) => {
    this.props.removeCommentFromAdminHandler(id);
  };

  approveCommentHandler = (id) => {
    this.props.approveComment(id);
  };

  render() {
    return (
      <Comments
        removeCommentHandler={
          this.props.adminPanel ? this.removeCommentFromAdminHandler : this.removeCommentFromSinglePostHandler
        }
        comments={this.props.adminPanel ? this.props.comments : this.props.singlePost.comments}
        userId={this.props.userId}
        isAdmin={this.props.user.isAdmin}
        adminPanel={this.props.adminPanel}
        approveCommentHandler={this.approveCommentHandler}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.posts.singlePost,
    userId: state.auth.userId,
    user: state.auth.user,
    comments: state.comments.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeCommentFromSinglePostHandler: (id) => dispatch(removeCommentFromSinglePostHandler(id)),
    removeCommentFromAdminHandler: (id) => dispatch(removeCommentFromAdminHandler(id)),
    approveComment: (id) => dispatch(approveComment(id)),
    getComments: () => dispatch(getComments()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
