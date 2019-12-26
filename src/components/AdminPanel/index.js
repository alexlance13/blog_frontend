import React, { Component } from 'react';
import Posts from '../../containers/PostsContainer';
import Header from '../Header';
import Toggle from '../Toggle';
import Comments from '../../containers/CommentsContainer';
import { connect } from 'react-redux';
import { approvePost, removePost } from '../../store/actions/posts';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  onApproveHandle = (postId) => {
    this.props.approvePost(postId);
  };

  onRemoveHandle = (postId) => {
    this.props.removePost(postId);
  };

  setIsChecked = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  render() {
    return (
      <div>
        <Header title="Admin Panel" subtitle="Here you can approve or remove new posts or comments"></Header>
        <Toggle
          isChecked={this.state.isChecked}
          setIsChecked={this.setIsChecked}
          left="Comment"
          right="Posts"
        />
        {this.state.isChecked ? (
          <Posts onApproveHandle={this.onApproveHandle} onRemoveHandle={this.onRemoveHandle} admin={true} />
        ) : (
          <Comments adminPanel={true} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.posts.singlePost,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    approvePost: (postId) => dispatch(approvePost(postId)),
    removePost: (postId) => dispatch(removePost(postId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
