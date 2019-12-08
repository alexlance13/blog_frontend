import React, { Component } from "react";
import Posts from "../../containers/PostsContainer";
import Header from "../Header";
import Toggle from "../Toggle";
import Comments from "../Comments";
import { connect } from "react-redux";
import { approvePost, removePost } from "../../store/actions/posts";
import { getComments, removeComment, approveComment } from "../../store/actions/comments";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }
  componentDidMount() {
    this.props.getComments();
  }
  onApproveHandle = postId => {
    this.props.approvePost(postId);
  };

  onRemoveHandle = postId => {
    this.props.removePost(postId);
  };

  setIsChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  removeCommentHandler = id => {
    this.props.removeComment(id);
  };

  approveCommentHandler = id => {
    this.props.approveComment(id);
  };

  render() {
    return (
      <div>
        <Header title="Admin Panel" subtitle="Here you can approve or remove new posts or comments"></Header>
        <Toggle isChecked={this.state.isChecked} setIsChecked={this.setIsChecked} />
        {this.state.isChecked ? (
          <Posts onApproveHandle={this.onApproveHandle} onRemoveHandle={this.onRemoveHandle} admin={true} />
        ) : (
          <Comments
            approveCommentHandler={this.approveCommentHandler}
            removeCommentHandler={this.removeCommentHandler}
            comments={this.props.comments}
            admin={true}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.posts.singlePost,
    comments: state.comments.comments
  };
}

function mapDispatchToProps(dispatch) {
  return {
    approvePost: postId => dispatch(approvePost(postId)),
    removePost: postId => dispatch(removePost(postId)),
    getComments: () => dispatch(getComments()),
    removeComment: id => dispatch(removeComment(id)),
    approveComment: id => dispatch(approveComment(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
