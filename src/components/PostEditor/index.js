import React, { Component } from "react";
import SinglePost from "../SinglePostContainer";
import { connect } from "react-redux";
import { fetchSinglePost, updatePost } from "../../store/actions/posts";

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      subtitle: "",
      title: ""
    };
  }

  async componentDidMount() {
    this.props.match
      ? await this.props.fetchSinglePost(this.props.match.params.id)
      : await this.props.fetchSinglePost(this.props.id);
    this.setState({
      text: this.props.singlePost.text,
      subtitle: this.props.singlePost.subtitle,
      title: this.props.singlePost.title
    });
  }

  onBlurHandler = e => {
    this.setState({
      text: e.target.innerHTML
    });
  };

  setSubtitle = e => {
    this.setState({
      subtitle: e.target.value
    });
  };

  setTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  updatePostHandler = () => {
    this.props.updatePost(
      this.state.title,
      this.state.subtitle,
      this.state.text,
      this.props.singlePost._id,
      this.props.token
    );
  };

  render() {
    return (
      <SinglePost
        updatePostHandler={this.updatePostHandler}
        subtitle={this.state.subtitle}
        title={this.state.title}
        setSubtitle={this.setSubtitle}
        setTitle={this.setTitle}
        text={this.state.text}
        onBlurHandler={this.onBlurHandler}
        isEditing={true}
        id={this.props.match.params.id}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePost: state.posts.singlePost,
    token: state.auth.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSinglePost: id => dispatch(fetchSinglePost(id)),
    updatePost: (title, subtitle, text, postId, token) =>
      dispatch(updatePost(title, subtitle, text, postId, token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
