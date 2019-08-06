import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';

import jQuery from 'jquery';
window.$ = jQuery;

class App extends Component {
  render() {
    return (
      <Router
        forceRefresh={false}
        basename="/react-inspinia">
        <div className="body">
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
