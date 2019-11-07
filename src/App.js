import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SinglePost from "./components/SinglePostContainer";
import Home from "./components/Home";
import Authorization from "./components/AuthorizationContainer";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/post/:id" component={SinglePost}></Route>
        <Route path="/authorization" component={Authorization}></Route>
        {/* <Route path="/post/add" component={CreatePost}></Route>
        <Route path="/admin" component={Admin}></Route>  */}
      </Switch>
    </>
  );
}

export default App;
