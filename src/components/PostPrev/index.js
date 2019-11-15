import React from "react";
import classes from "./PostPrev.module.css";
import { NavLink } from "react-router-dom";
import PostInfo from "../PostInfoContainer";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function PostPrev(props) {
  const body = (
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
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.onRemoveHandle(props.post._id)}
          >
            <MdDelete />
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              console.log(props.post._id);
              props.onApproveHandle(props.post._id);
            }}
          >
            <TiTick />
          </button>
        </div>
      )}
    </div>
  );
  if (props.admin) return !props.post.approved && body;
  return props.post.approved && body;
}
