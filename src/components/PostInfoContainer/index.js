import React, { useState, useEffect } from "react";
import PostInfo from "./PostInfo";
import Axios from "axios";

export default function PostInfoContainer(props) {
  async function like() {
    const headers = {
      "content-type": "application/json",
      authorization: `Bearer ${props.token}`
    };
    const res = await Axios.post(
      "http://localhost:3333/like",
      {
        postId: `${post._id}`
      },
      {
        headers
      }
    );
    getPost(res.data.post);
  }

  function setIsLikedIfItIs() {
    post.likes.filter(el => el.owner === props.userId).length ? setIsLiked(true) : setIsLiked(false);
  }

  async function getPost(id) {
    const response = await Axios.get(`http://localhost:3333/posts/${id}`);
    setPost(response.data);
  }

  useEffect(() => setIsLikedIfItIs());

  useEffect(() => setPost(props.post), [props.post]);

  const [isLiked, setIsLiked] = useState(false);
  const [post, setPost] = useState(props.post);
  return (
    <PostInfo
      like={like}
      isLiked={isLiked}
      setIsLiked={setIsLiked}
      post={post}
      commentClickHandler={props.commentClickHandler}
    />
  );
}
