import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Blog from './component/pages/blog/blog';
import Login from './component/pages/login/login';
import Profile from './component/pages/profile/profile';
import Post from './component/pages/posts/post';
import { PrivateRoute } from './privateRoute';
import About from "./component/pages/about/about";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/about" component={About} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
