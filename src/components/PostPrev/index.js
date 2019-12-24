import React from 'react';
import classes from './PostPrev.module.css';
import { NavLink } from 'react-router-dom';
import PostInfo from '../../containers/PostInfoContainer';
import { MdDelete } from 'react-icons/md';
import { TiTick } from 'react-icons/ti';
import HTMLtoReactParser from '../../helpers/HTMLtoReactParser';

export default function PostPrev(props) {
  const {post, admin, onRemoveHandle, onApproveHandle, likeClickHandler, userId} = props;
  const body = (
    <div className={classes.main}>
      <NavLink to={`/post/${post._id}`}>
        <h1>{post.title}</h1>
        <div className={classes.textWrapper}>{HTMLtoReactParser(post.text)}</div>
      </NavLink>
      <PostInfo
        disabled={true}
        post={post}
        userId={userId}
        likeClickHandler={likeClickHandler}
      ></PostInfo>
      {admin && (
        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onRemoveHandle(post._id)}
          >
            <MdDelete />
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => onApproveHandle(post._id)}
          >
            <TiTick />
          </button>
        </div>
      )}
    </div>
  );
  if (admin) return !post.approved && body;
  return post.approved && body;
}
