import React from "react";
import PostPrev from "../../PostPrev";
import Loader from "../../Loader";

const Posts = props => {
  return props.loading ? (
    <Loader />
  ) : (
    <div>
      {props.posts.map((post, i) => (
        <PostPrev
          key={i}
          post={post}
          userId={props.userId}
          token={props.token}
          likeClickHandler={props.likeClickHandler}
        ></PostPrev>
      ))}
    </div>
  );
};

export default Posts;
