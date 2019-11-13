import React from "react";
import classes from "./PostPrev.module.css";
import { NavLink } from "react-router-dom";
import PostInfo from "../PostInfoContainer";

export default function PostPrev(props) {
  return props.post.approved ? (
    <div className={classes.main}>
      <NavLink to={`/post/${props.post._id}`}>
        <h1>{props.post.title}</h1>
        <p>
          {props.post.text
            .split(" ")
            .slice(0, 15)
            .join(" ") + "..."}
        </p>
      </NavLink>
      <PostInfo
        disabled={true}
        post={props.post}
        userId={props.userId}
        token={props.token}
        likeClickHandler={props.likeClickHandler}
      ></PostInfo>
      {props.admin && (
        <div>
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-success">
            Success
          </button>
        </div>
      )}
    </div>
  ) : null;
}
