import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Blog from './component/pages/blog/blog';
import Login from './component/pages/login/login';
import Profile from './component/pages/profile/profile';
import { PrivateRoute } from './privateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
