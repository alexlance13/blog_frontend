import React from "react";
import classes from "./Comments.module.css";
import { NavLink } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

export default function Comments(props) {
  return (
    <div className={classes.main}>
      {props.post.comments.map((comment, i) => {
        return comment.approved ? (
          <div key={i} className={classes.comment}>
            <NavLink to={`/users/${comment.owner._id}`}>{comment.owner.login} :</NavLink>
            <span>{comment.text}</span>
            {comment.owner._id === props.userId ? (
              <button className={classes.remove} onClick={() => props.removeCommentHandler(comment._id)}>
                <AiOutlineDelete />
              </button>
            ) : null}
          </div>
        ) : null;
      })}
    </div>
  );
}
