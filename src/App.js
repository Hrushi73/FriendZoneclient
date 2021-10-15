import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/LoginPage/Login";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import AllComments from "./Components/AllComments/AllComments";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/post">
          <Post />
        </Route>
        <Route exact path="/allComments/:idOfPost">
          <AllComments />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
