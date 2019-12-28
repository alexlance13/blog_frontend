import React, { Component } from 'react';
import SinglePost from '../../containers/SinglePostContainer';
import { connect } from 'react-redux';
import { fetchSinglePost, updatePost, createPost } from '../../store/actions/posts';
import validateAll from '../../helpers/vaildateAll';

class PostEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      subtitle: '',
      title: '',
      isCreating: this.props.match.params.id === '5e078a17a004ad000439a5ea',
      errors: {},
      submited: false,
    };
  }

  async componentDidMount() {
    this.props.match
      ? await this.props.fetchSinglePost(this.props.match.params.id)
      : await this.props.fetchSinglePost(this.props.id);
    this.setState({
      text: this.state.isCreating ? ' ' : this.props.singlePost.text,
      subtitle: this.props.singlePost.subtitle,
      title: this.props.singlePost.title,
    });
  }

  onChangeHandler = (field, value) => {
    this.setState({
      [field]: value,
      errors: {
        ...this.state.errors,
        [field]: !validateAll(field, value) && `${field} lenght is not valid`,
      },
    });
  };

  updatePostHandler = () => {
    this.props.updatePost(
      this.state.title,
      this.state.subtitle,
      this.state.text.replace(/<(?<tag>.*?)[^>]*>((\s*?)|(<\/?[^>]*>)|(&[^;]*;))<\/\k<tag>>/gi, ''),
      this.props.singlePost._id,
    );
    this.props.history.push(`/post/${this.props.singlePost._id}`);
  };
  createPostHandler = async () => {
    const res = await createPost(
      this.state.title,
      this.state.subtitle,
      this.state.text.replace(/<(?<tag>.*?)[^>]*>((\s*?)|(<\/?[^>]*>)|(&[^;]*;))<\/\k<tag>>/gi, ''),
    );
    this.props.history.push(`/post/${res.data._id}`);
  };

  onSave = (post) => {
    this.setState({
      submited: true,
    });
    if (Object.values(this.state.errors).filter((value) => value !== false).length) return;
    post._id === '5e078a17a004ad000439a5ea' ? this.createPostHandler() : this.updatePostHandler();
  };

  render() {
    return (
      <SinglePost
        errors={this.state.errors}
        submited={this.state.submited}
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
        isCreating={this.state.isCreating}
        id={this.props.match.params.id}
      />
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
    fetchSinglePost: (id) => dispatch(fetchSinglePost(id)),
    updatePost: (title, subtitle, text, postId) => dispatch(updatePost(title, subtitle, text, postId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor);
