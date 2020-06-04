import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Entries from "./pages/entries";
import NewEntry from "./pages/newEntry";

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div className='app'>
        <h1>Journal app</h1>
        <Router>
          <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/login' component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/entries" component={Entries} />
                <Route path="/new-entry" component={NewEntry} />
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
