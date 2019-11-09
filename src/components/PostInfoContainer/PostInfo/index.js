import React from "react";
import classes from "./PostInfo.module.css";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const PostInfo = props => {
  function crutch(string) {
    switch (string) {
      case "comment":
        if (props.disabled) {
          return (
            <NavLink className={classes.picLink} to={`/post/${props.post._id}`}>
              <FaRegComment />
            </NavLink>
          );
        }
        return (
          <div onClick={props.commentClickHandler}>
            <FaRegComment />
          </div>
        );
      case "like":
        if (props.disabled) {
          if (props.isLiked) {
            return (
              <NavLink className={classes.picLink} to={`/post/${props.post._id}`}>
                <FaHeart />
              </NavLink>
            );
          }
          return (
            <NavLink className={classes.picLink} to={`/post/${props.post._id}`}>
              <FaRegHeart />
            </NavLink>
          );
        }
        if (props.isLiked) {
          return (
            <div
              onClick={() => {
                props.like(props.post._id);
              }}
            >
              <FaHeart />
            </div>
          );
        }
        return (
          <div
            onClick={() => {
              props.like(props.post._id);
            }}
          >
            <FaRegHeart />
          </div>
        );
    }
  }

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
        <span>{props.post.comments.filter(comment => comment.approved).length}</span> {crutch("comment")}
      </span>
      <span className={classes.like}>
        <span>{props.post.likes.length}</span>
        {crutch("like")}
      </span>
      <hr />
    </div>
  );
};

export default PostInfo;
