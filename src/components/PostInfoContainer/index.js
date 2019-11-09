import React, { useState, useEffect } from "react";
import PostInfo from "./PostInfo";

export default function PostInfoContainer(props) {
  async function like(id) {
    props.likeClickHandler(id, isLiked);
    setIsLiked(!isLiked);
  }

  const [isLiked, setIsLiked] = useState(props.post.likes.some(e => e.owner === props.userId));
  return (
    <PostInfo
      disabled={props.disabled}
      like={like}
      isLiked={isLiked}
      setIsLiked={setIsLiked}
      post={props.post}
      commentClickHandler={props.commentClickHandler}
    />
  );
}
