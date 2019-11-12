import React from "react";
import Posts from "../PostsContainer";
import Header from "../Header";

const MyPosts = () => {
  return (
    <div>
      <Header
        title="Clean Blog"
        subtitle="A Clean Blog Theme by Start Bootstrap"
      ></Header>
      <Posts />
    </div>
  );
};

export default MyPosts;
