import React from 'react';
import classes from './Comments.module.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiTick } from 'react-icons/ti';

export default function Comments(props) {
  const {comments, admin: adminPanel, userId, isAdmin, approveCommentHandler, removeCommentHandler,  } = props;
  return (
    <div className={classes.main}>
      {comments.map((comment, i) => {
        return (
          ((!adminPanel && comment.approved) || (adminPanel && !comment.approved)) && (
            <div key={i} className={classes.comment}>
              <NavLink to={`/users/${comment.owner._id}`}>{comment.owner.login} :</NavLink>
              <span>{comment.text}</span>
              {(comment.owner._id === userId || adminPanel || isAdmin) && (
                <div className={classes.buttons}>
                  {!comment.approved && (
                    <button
                      className={classes.remove}
                      onClick={() => approveCommentHandler(comment._id)}
                    >
                      <TiTick />
                    </button>
                  )}
                  <button className={classes.remove} onClick={() => removeCommentHandler(comment._id)}>
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
