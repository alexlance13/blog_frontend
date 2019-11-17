import React, { Component } from "react";
import SinglePost from "../SinglePostContainer";
import { connect } from "react-redux";
import { fetchSinglePost, updatePost, createPost } from "../../store/actions/posts";

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

  onChangeHandler = e => {
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
    this.props.history.push(`/post/${this.props.singlePost._id}`);
  };
  createPostHandler = async () => {
    const res = await createPost(this.state.title, this.state.subtitle, this.state.text, this.props.token);
    this.props.history.push(`/post/${res.data._id}`);
  };

  onSave = post => {
    post._id === "5dd052eb46471726995ebefe" ? this.createPostHandler() : this.updatePostHandler();
  };

  render() {
    return (
      <SinglePost
        onSave={this.onSave}
        postId={this.state.postId}
        createPostHandler={this.createPostHandler}
        updatePostHandler={this.updatePostHandler}
        subtitle={this.state.subtitle}
        title={this.state.title}
        setSubtitle={this.setSubtitle}
        setTitle={this.setTitle}
        text={this.state.text}
        onChangeHandler={this.onChangeHandler}
        isEditing={true}
        isCreating={this.props.isCreating}
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
