import React from "react";
import classes from "./PostInfo.module.css";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const PostInfo = props => {
  return (
    <div className={classes.main}>
      <p className={classes.postedBy}>
        Posted by{" "}
        <NavLink exac to="/">
          {props.post.owner.login}
        </NavLink>{" "}
        {props.post.updatedTime ? "updated " : ""}
        at {props.post.updatedTime ? props.post.updatedTime : props.post.createdAt}
      </p>
      <span className={classes.comment}>
        <span>{props.post.comments.filter(comment => comment.approved).length}</span>{" "}
        <div onClick={props.commentClickHandler}>
          <FaRegComment />
        </div>
      </span>
      <span className={classes.like}>
        <span>{props.post.likes.length}</span>
        {props.isLiked ? (
          <div onClick={props.like}>
            <FaHeart />
          </div>
        ) : (
          <div onClick={props.like}>
            <FaRegHeart />
          </div>
        )}
      </span>
      <hr />
    </div>
  );
};

export default PostInfo;
