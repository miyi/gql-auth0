import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Main from 'Main';
import CreatePost from 'CreatePost';
import CreateUser from 'CreateUser';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={Main}/>
        <Route path='/create' component={CreatePost}/>
        <Route path='/signup' component={CreateUser}/>
      </Switch>
    );
  }
}

export default App;
