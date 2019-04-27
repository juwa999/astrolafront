import React, { Component } from 'react';
import About from './routes/about/index';
import Users from './routes/users/index';
import Home from './routes/home/index';
import Register from './routes/users/register';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={About} />
        <Route path='/about' component={Home} />
        <Route path='/users' component={Users} />
        <Route path='/register' component={Register} />
      </Switch>
    );
  }
}

export default App;
