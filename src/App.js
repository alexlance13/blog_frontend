import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import SinglePost from "./containers/SinglePostContainer";
import Home from "./components/Home";
import MyPosts from "./components/MyPosts";
import PostEditor from "./components/PostEditor";
import Authorization from "./containers/AuthoizationContainer";
import PrivateRoute from "./components/PrivateRoute";
import SomeUserPosts from "./components/SomeUserPosts";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={SinglePost} />
        <Route path="/authorization" component={Authorization} />
        <PrivateRoute path="/my-posts" component={MyPosts} />
        <Route path="/user-posts/:id" component={SomeUserPosts} />
        <Route path="/post-edit/:id" component={PostEditor} />
        <PrivateRoute admin={true} path="/admin" component={AdminPanel} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
