import React from "react";
import PostPrev from "../PostPrev";
import Loader from "../Loader";

const Posts = props => {
  return props.loading ? (
    <Loader />
  ) : (
    <div>
      {props.posts.map((post, i) => (
        <PostPrev
          onApproveHandle={props.onApproveHandle}
          onRemoveHandle={props.onRemoveHandle}
          admin={props.admin}
          key={i}
          post={post}
          userId={props.userId}
          likeClickHandler={props.likeClickHandler}
        ></PostPrev>
      ))}
    </div>
  );
};

export default Posts;
