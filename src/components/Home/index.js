import React from "react";
import Posts from "../PostsContainer";
import Header from "../Header";

const Home = () => {
  return (
    <div>
      <Header head="Clean Blog" neck="A Clean Blog Theme by Start Bootstrap"></Header>
      <Posts></Posts>
    </div>
  );
};

export default Home;
