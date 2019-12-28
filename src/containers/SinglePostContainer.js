import React, { Component } from 'react';
import { connect } from 'react-redux';
import SinglePost from '../components/SinglePost';
import { fetchSinglePost, removePost, setComment } from '../store/actions/posts';

class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCommentsOpened: false,
    };
  }

  componentDidMount() {
    this.props.match
      ? this.props.fetchSinglePost(this.props.match.params.id)
      : this.props.fetchSinglePost(this.props.id);
  }

  submitHandler = async (commentData) => {
    const res = await this.props.setComment(this.props.match.params.id, commentData);
    this.setState({
      isCommentsOpened: true,
    });
    if (res) setTimeout(() => this.props.history.push('/authorization'), 2000);
  };

  commentClickHandler = () => this.setState({ isCommentsOpened: !this.state.isCommentsOpened });

  postRemoveHandler = () => {
    this.props.removePost(this.props.singlePost._id);
  };

  render() {
    return (
      <SinglePost
        history={this.props.history}
        errors={this.props.errors}
        submited={this.props.submited}
        onChangeHandler={this.props.onChangeHandler}
        onSave={this.props.onSave}
        postId={this.props.postId}
        createPostHandler={this.props.createPostHandler}
        isCreating={this.props.isCreating}
        user={this.props.user}
        postRemoveHandler={this.postRemoveHandler}
        updatePostHandler={this.props.updatePostHandler}
        subtitle={this.props.subtitle}
        title={this.props.title}
        text={this.props.text}
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
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSinglePost: (id) => dispatch(fetchSinglePost(id)),
    removePost: (id) => dispatch(removePost(id)),
    setComment: (postId, text) => dispatch(setComment(postId, text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePostContainer);
