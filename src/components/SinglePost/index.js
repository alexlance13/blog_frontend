import React from 'react';
import classes from './SinglePost.module.css';
import Comments from '../../containers/CommentsContainer';
import Header from '../Header';
import PostInfo from '../../containers/PostInfoContainer';
import CommentForm from '../CommentForm';
import { NavLink } from 'react-router-dom';
import TextEditor from '../Editor';
import HTMLtoReactParser from '../../helpers/HTMLtoReactParser';

const SinglePost = (props) => {
  const {
    isEditing,
    post,
    subtitle,
    title,
    onChangeHandler,
    token,
    isCreating,
    submited,
    errors,
    onSave,
    user,
    userId,
    commentClickHandler,
    isCommentsOpened,
    postRemoveHandler,
    submitHandler,
  } = props;
  const cls = [classes.postBody];
  isEditing && cls.push(classes.editing);
  return post.title ? (
    <div className={classes.main}>
      <Header
        subtitle={isEditing ? subtitle : post.subtitle}
        title={isEditing ? title : post.title}
        onChangeHandler={onChangeHandler}
        editing={isEditing}
      />
      <div className={cls.join(' ')}>
        {isEditing ? (
          <div>
            <TextEditor token={token} body={isCreating ? ' ' : post.text} onChangeHandler={onChangeHandler} />
            <ul className={classes.errors}>
              {submited &&
                Object.values(errors).map(
                  (err, i) =>
                    err !== false && (
                      <li key={i} className="alert alert-danger">
                        {err}
                      </li>
                    ),
                )}
            </ul>
            <button type="button" className="btn btn-success" onClick={() => onSave(post)}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <div className={classes.wrap}>{HTMLtoReactParser(post.text)}</div>
            <PostInfo post={post} userId={userId} commentClickHandler={commentClickHandler} />
          </div>
        )}
        {!isEditing && isCommentsOpened && <Comments />}
        {!isEditing && (user.isAdmin || post.owner._id === userId) && (
          <div className={classes.buttons}>
            <NavLink type="button" className="btn btn-success" to={`/post-edit/${post._id}`}>
              Edit
            </NavLink>
            <NavLink type="button" className="btn btn-danger" onClick={() => postRemoveHandler()} to="/">
              Remove
            </NavLink>
          </div>
        )}
        {!isEditing && <CommentForm submitHandler={submitHandler} />}
      </div>
    </div>
  ) : null;
};

export default SinglePost;
