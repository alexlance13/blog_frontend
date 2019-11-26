import React from "react";
import classes from "./PostPrev.module.css";
import { NavLink } from "react-router-dom";
import PostInfo from "../PostInfoContainer";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import HTMLtoReactParser from "../../helpers/HTMLtoReactParser";

export default function PostPrev(props) {
  const body = (
    <div className={classes.main}>
      <NavLink to={`/post/${props.post._id}`}>
        <h1>{props.post.title}</h1>
        <div className={classes.textWrapper}>{HTMLtoReactParser(props.post.text)}</div>
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
            onClick={() => props.onApproveHandle(props.post._id)}
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
