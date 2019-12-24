import React from 'react';
import Posts from '../../containers/PostsContainer';
import Header from '../Header';

const Home = () => {
  return (
    <div>
      <Header title="Clean Blog" subtitle="A Clean Blog Theme by Start Bootstrap"></Header>
      <Posts home={true} />
    </div>
  );
};

export default Home;
