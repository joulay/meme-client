import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';

import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <HeaderBar />
          <Route exact path="/" component={LandingPage} />        
      </div>
    );
  }
}

export default App;
