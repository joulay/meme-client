import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';
import './App.css';

class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        // When we are logged in, refresh the auth token periodically
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        // Stop refreshing when we log out
        this.stopPeriodicRefresh();
    }
}

componentWillUnmount() {
    this.stopPeriodicRefresh();
}

startPeriodicRefresh() {
    this.refreshInterval = setInterval(
        () => this.props.dispatch(refreshAuthToken()),
        60 * 60 * 1000 // One hour
    );
}

stopPeriodicRefresh() {
    if (!this.refreshInterval) {
        return;
    }

    clearInterval(this.refreshInterval);
}

render() {
    return (
      <div className="App">
          <HeaderBar />
          <Route exact path="/" component={LandingPage} />     
          <Route exact path="/register" component={RegistrationPage} />   
      </div>
    );
  }
}

export default App;
