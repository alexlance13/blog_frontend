import React from 'react';
import classes from './PostInfo.module.css';
import { NavLink } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import dateFormatter from '../../helpers/dateFormatter';

const PostInfo = (props) => {
  const {disabled, commentClickHandler, isLiked, post, like} = props;
  function crutch(string) {
    switch (string) {
      case 'comment':
        if (disabled) {
          return (
            <NavLink className={classes.picLink} to={`/post/${post._id}`}>
              <FaRegComment />
            </NavLink>
          );
        }
        return (
          <div onClick={commentClickHandler}>
            <FaRegComment />
          </div>
        );
      case 'like':
        if (disabled) {
          if (isLiked) {
            return (
              <NavLink className={classes.picLink} to={`/post/${post._id}`}>
                <FaHeart />
              </NavLink>
            );
          }
          return (
            <NavLink className={classes.picLink} to={`/post/${post._id}`}>
              <FaRegHeart />
            </NavLink>
          );
        }
        if (isLiked) {
          return (
            <div
              onClick={() => {
                like(post._id);
              }}
            >
              <FaHeart />
            </div>
          );
        }
        return (
          <div
            onClick={() => {
              like(post._id);
            }}
          >
            <FaRegHeart />
          </div>
        );
      default:
        return null;
    }
  }
  return (
    <div className={classes.main}>
      <p className={classes.postedBy}>
        Posted by <NavLink to={`/user-posts/${post.owner._id}`}>{post.owner.login}</NavLink>{' '}
        {post.updatedAt && post.created_at.slice(0, 16) !== post.updatedAt.slice(0, 16)
          ? 'updated '
          : ''}
        at{' '}
        {post.updatedTime ? dateFormatter(post.updatedAt) : dateFormatter(post.created_at)}
      </p>
      <span className={classes.comment}>
        <span>{post.comments.filter((comment) => comment.approved).length}</span> {crutch('comment')}
      </span>
      <span className={classes.like}>
        <span>{post.likes.length}</span>
        {crutch('like')}
      </span>
      <hr />
    </div>
  );
};

export default PostInfo;
