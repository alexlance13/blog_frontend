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
      <PostInfo post={props.post} userId={props.userId} token={props.token}></PostInfo>
    </div>
  ) : null;
}
