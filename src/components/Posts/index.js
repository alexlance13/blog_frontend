import React from 'react';
import PostPrev from '../PostPrev';
import Loader from '../Loader';
import { NavLink } from 'react-router-dom';
import classes from './Posts.module.css';

const Posts = (props) => {
  return props.loading ? (
    <Loader />
  ) : (
    <div>
      {props.posts.filter((post) => post.approved !== null).length ? (
        props.posts.map((post, i) => (
          <PostPrev
            onApproveHandle={props.onApproveHandle}
            onRemoveHandle={props.onRemoveHandle}
            admin={props.admin}
            key={i}
            post={post}
            userId={props.userId}
            likeClickHandler={props.likeClickHandler}
          ></PostPrev>
        ))
      ) : (
        <div className={classes.noPost}>
          <h1>You have no published posts yet</h1>
          <hr />
          <NavLink type="button" className="btn btn-primary" to="/post-edit/5e078a17a004ad000439a5ea">
            ADD POST
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Posts;
