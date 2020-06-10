import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/home";
import Auth from "./pages/auth";
import Register from "./pages/register";
import Entries from "./pages/entries";
import NewEntry from "./pages/newEntry";
import NoMatch from "./pages/noMatch";

import NavigationContainer from "./navigation/navigation-container"

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN'
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    localStorage.setItem('loggedInStatus', true)
    this.setState({
      loggedInStatus: "Logged_In"
    });
  }

  handleUnsuccessfulLogin() {
    // this.setState({
    //   loggedInStatus: "NOT_LOGGED_IN"
    // });
  }

  handleSuccessfulLogout() {
    console.log('logged out')
  }

  authorizedPages(){
    return [
      <div key='login-pages'>
        <Route key='entries' path="/entries"  component={Entries} />
        <Route key="new-entry" path="/new-entry"  component={NewEntry} />
      </div>
    ]
  }
  
  // checkLoginStatus(){
  //   return axios.get('http://127.0.0.1:5000/logged_in')
  //   .then(response => {
  //     console.log('logged_in response', response)
  //   })
  //   .catch(error => {
  //     console.log("logged_in error", error)
  //   })
  // }

  // componentDidMount(){
  //   this.checkLoginStatus()
  // }

  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer
              loggedInStatus = {this.state.loggedInStatus}
              handleSuccessfulLogout = {this.handleSuccessfulLogout}
            />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path='/auth' render={props => (
                <Auth
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )}/>
                {localStorage.getItem('loggedInStatus') ? (
                  this.authorizedPages()
                ): null}
              <Route path="/register" render={props => (
                <Register
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )} />

              
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
