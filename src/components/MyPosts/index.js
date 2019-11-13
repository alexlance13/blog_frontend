import React from "react";
import Posts from "../PostsContainer";
import Header from "../Header";

const MyPosts = () => {
  return (
    <div>
      <Header title="My posts" subtitle="Here you can see your posts"></Header>
      <Posts />
    </div>
  );
};

export default MyPosts;
