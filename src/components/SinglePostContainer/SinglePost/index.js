import React from "react";
import classes from "./SinglePost.module.css";
import Comments from "../../Comments";
import Header from "../../Header";
import PostInfo from "../../PostInfoContainer";
import CommentForm from "./CommentForm";
import { NavLink } from "react-router-dom";
import TextEditor from "../../Editor";
import HTMLtoReactParser from "../../../helpers/HTMLtoReactParser";

const SinglePost = props => {
  const cls = [classes.postBody];
  props.isEditing && cls.push(classes.editing);
  return props.post.title ? (
    <div className={classes.main}>
      <Header
        subtitle={props.subtitle || props.post.subtitle}
        title={props.title || props.post.title}
        setSubtitle={props.setSubtitle}
        setTitle={props.setTitle}
        editing={props.isEditing}
      />
      <div class={cls.join(" ")}>
        {props.isEditing ? (
          <TextEditor
            token={props.token}
            body={props.isCreating ? "Put your text here" : props.post.text}
            onChangeHandler={props.onChangeHandler}
          />
        ) : (
          <p>{HTMLtoReactParser(props.post.text)}</p>
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
            <div className="modal-dialog modal-lg">Your comment is on check by admin</div>
          ) : (
            <Comments
              removeCommentHandler={props.removeCommentHandler}
              post={props.post}
              userId={props.userId}
              token={props.token}
            />
          ))}
        {(props.user.isAdmin || props.post.owner._id === props.userId) &&
          (props.isEditing ? (
            <button type="button" className="btn btn-success" onClick={() => props.onSave(props.post)}>
              Save
            </button>
          ) : (
            <div className={classes.buttons}>
              <NavLink type="button" className="btn btn-success" to={`/post-edit/${props.post._id}`}>
                Edit
              </NavLink>
              <NavLink
                type="button"
                className="btn btn-danger"
                onClick={() => props.postRemoveHandler()}
                to="/"
              >
                Remove
              </NavLink>
            </div>
          ))}
        {!props.isEditing && <CommentForm submitHandler={props.submitHandler} />}
      </div>
    </div>
  ) : null;
};

export default SinglePost;
