import React, { Component } from "react";
import Posts from "../PostsContainer";
import Header from "../Header";
import { connect } from "react-redux";
import { approvePost, removePost } from "../../store/actions/posts";

class AdminPanel extends Component {
  onApproveHandle = postId => {
    this.props.approvePost(postId, this.props.token);
  };

  onRemoveHandle = postId => {
    this.props.removePost(postId, this.props.token);
  };

  render() {
    return (
      <div>
        <Header title="Clean Blog" subtitle="A Clean Blog Theme by Start Bootstrap"></Header>
        <Posts onApproveHandle={this.onApproveHandle} onRemoveHandle={this.onRemoveHandle} admin={true} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    approvePost: (postId, token) => dispatch(approvePost(postId, token)),
    removePost: (postId, token) => dispatch(removePost(postId, token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
