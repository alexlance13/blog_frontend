import React from "react";
import classes from "./SinglePost.module.css";
import Comments from "../../Comments";
import Header from "../../Header";
import PostInfo from "../../PostInfoContainer";
import CommentForm from "./CommentForm";

const SinglePost = props => {
  return props.post.approved ? (
    <div className={classes.main}>
      <Header
        head={props.post.title}
        neck={
          props.post.subtitle ||
          props.post.text
            .split(" ")
            .slice(0, 12)
            .join(" ") + "..."
        }
      />
      <div className={classes.postBody}>
        <p>{props.post.text}</p>
        <PostInfo
          post={props.post}
          userId={props.userId}
          commentClickHandler={props.commentClickHandler}
          token={props.token}
          likeClickHandler={props.likeClickHandler}
        />
        {props.isCommentsOpened &&
          (props.isNewCommentPosted ? (
            <div>Your comment is on check by admin</div>
          ) : (
            <Comments
              removeCommentHandler={props.removeCommentHandler}
              post={props.post}
              userId={props.userId}
              token={props.token}
            />
          ))}
        <CommentForm submitHandler={props.submitHandler} />
      </div>
    </div>
  ) : null;
};

export default SinglePost;
