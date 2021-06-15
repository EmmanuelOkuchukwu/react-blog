import React from 'react';
import './App.scss';
import Blog from './component/pages/blog/blog';
import { Switch, Route } from 'react-router-dom';
import Login from './component/pages/login/login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
