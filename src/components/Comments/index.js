import React from 'react';
import classes from './Comments.module.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

export default function Comments(props) {
  return (
    <div className={classes.main}>
      {props.comments.map((comment, i) => {
        return (
          ((!props.admin && comment.approved) || (props.admin && !comment.approved)) && (
            <div key={i} className={classes.comment}>
              <NavLink to={`/users/${comment.owner._id}`}>{comment.owner.login} :</NavLink>
              <span>{comment.text}</span>
              {(comment.owner._id === props.userId || props.admin || props.isAdmin) && (
                <div className={classes.buttons}>
                  {!comment.approved && (
                    <button
                      className={classes.remove}
                      onClick={() => props.approveCommentHandler(comment._id)}
                    >
                      <TiTick />
                    </button>
                  )}
                  <button className={classes.remove} onClick={() => props.removeCommentHandler(comment._id)}>
                    <AiOutlineDelete />
                  </button>
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
}
