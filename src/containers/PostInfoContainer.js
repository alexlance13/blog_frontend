import React, { Component } from 'react';
import PostInfo from '../components/PostInfo';
import { connect } from 'react-redux';
import { like } from '../store/actions/posts';

class PostInfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: this.props.post.likes.some((e) => e.owner === this.props.userId),
      ping: false,
    };
  }
  likeClickHandler = async (id) => {
    this.setState({
      ping: true,
    });
    const res = await this.props.like(id, this.state.isLiked);
    this.setState({
      isLiked: !this.state.isLiked,
    });
    if (res) setTimeout(() => this.props.history.push('/authorization'), 2000);
    this.setState({
      ping: false,
    });
  };

  render() {
    return (
      <PostInfo
        ping={this.state.ping}
        disabled={this.props.disabled}
        likeClickHandler={this.likeClickHandler}
        isLiked={this.state.isLiked}
        post={this.props.post}
        commentClickHandler={this.props.commentClickHandler}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    like: (postId, isLiked) => dispatch(like(postId, isLiked)),
  };
}

export default connect(null, mapDispatchToProps)(PostInfoContainer);
