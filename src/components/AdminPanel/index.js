import React from "react";
import Posts from "../PostsContainer";
import Header from "../Header";

const AdminPanel = props => {
  return (
    <div>
      <Header title="Clean Blog" subtitle="A Clean Blog Theme by Start Bootstrap"></Header>
      <Posts admin={true} />
    </div>
  );
};

export default AdminPanel;
