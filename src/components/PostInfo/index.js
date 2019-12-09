import React from "react";
import classes from "./PostInfo.module.css";
import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import dateFormatter from "../../helpers/dateFormatter";

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
      default:
        return null;
    }
  }
  return (
    <div className={classes.main}>
      <p className={classes.postedBy}>
        Posted by <NavLink to={`/user-posts/${props.post.owner._id}`}>{props.post.owner.login}</NavLink>{" "}
        {props.post.updatedAt && props.post.created_at.slice(0, 16) !== props.post.updatedAt.slice(0, 16)
          ? "updated "
          : ""}
        at{" "}
        {props.post.updatedTime ? dateFormatter(props.post.updatedAt) : dateFormatter(props.post.created_at)}
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
