import React from "react";
import classes from "./SinglePost.module.css";
import Comments from "../../Comments";
import Header from "../../Header";
import PostInfo from "../../PostInfoContainer";
import CommentForm from "./CommentForm";
import { NavLink } from "react-router-dom";

const SinglePost = props => {
  return props.post.approved ? (
    <div className={classes.main}>
      <Header
        subtitle={
          props.subtitle ||
          props.post.text
            .split(" ")
            .slice(0, 12)
            .join(" ") + "..."
        }
        title={props.title || props.post.title}
        setSubt={props.setSubt}
        setTitle={props.setTitle}
        editing={props.isEditing}
      />
      <div className={classes.postBody}>
        {props.isEditing ? (
          <div
            contentEditable={true}
            suppressContentEditableWarning={true}
            onBlur={e => props.onBlurHandler(e)}
          >
            {props.text}
          </div>
        ) : (
          <p>{props.post.text}</p>
        )}
        {!props.isEditing && (
          <PostInfo
            post={props.post}
            userId={props.userId}
            commentClickHandler={props.commentClickHandler}
            token={props.token}
            likeClickHandler={props.likeClickHandler}
          />
        )}
        {!props.isEditing &&
          props.isCommentsOpened &&
          (props.isNewCommentPosted ? (
            <div className="modal-dialog modal-lg">
              Your comment is on check by admin
            </div>
          ) : (
            <Comments
              removeCommentHandler={props.removeCommentHandler}
              post={props.post}
              userId={props.userId}
              token={props.token}
            />
          ))}
        {props.post.owner._id === props.userId &&
          (props.isEditing ? (
            <button type="button" className="btn btn-success">
              <NavLink
                onClick={() => props.updatePostHandler()}
                className={classes.button}
                to={`/post/${props.post._id}`}
              >
                Save
              </NavLink>
            </button>
          ) : (
            <button type="button" className="btn btn-success">
              <NavLink
                className={classes.button}
                to={`/post-edit/${props.post._id}`}
              >
                Edit
              </NavLink>
            </button>
          ))}
        {!props.isEditing && (
          <CommentForm submitHandler={props.submitHandler} />
        )}
      </div>
    </div>
  ) : null;
};

export default SinglePost;
