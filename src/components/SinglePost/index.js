import React from "react";
import classes from "./SinglePost.module.css";
import Comments from "../Comments";
import Header from "../Header";
import PostInfo from "../../containers/PostInfoContainer";
import CommentForm from "../CommentForm";
import { NavLink } from "react-router-dom";
import TextEditor from "../Editor";
import HTMLtoReactParser from "../../helpers/HTMLtoReactParser";

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
          <div>
            <TextEditor
              token={props.token}
              body={props.isCreating ? " " : props.post.text}
              onChangeHandler={props.onChangeHandler}
            />
            <button type="button" className="btn btn-success" onClick={() => props.onSave(props.post)}>
              Save
            </button>
          </div>
        ) : (
          <div>
            <div className={classes.wrap}>{HTMLtoReactParser(props.post.text)}</div>
            <PostInfo
              post={props.post}
              userId={props.userId}
              commentClickHandler={props.commentClickHandler}
              likeClickHandler={props.likeClickHandler}
            />
          </div>
        )}
        {!props.isEditing && props.isCommentsOpened && (
          <Comments
            removeCommentHandler={props.removeCommentHandler}
            comments={props.post.comments}
            userId={props.userId}
            isAdmin={props.user.isAdmin}
          />
        )}
        {!props.isEditing && (props.user.isAdmin || props.post.owner._id === props.userId) && (
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
        )}
        {!props.isEditing && <CommentForm submitHandler={props.submitHandler} />}
      </div>
    </div>
  ) : null;
};

export default SinglePost;
