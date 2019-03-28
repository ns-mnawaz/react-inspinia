import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../theme/main';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

  render() {
    return (
      <div>
        <Route path="/" exact component={Main} />
      </div>
    );
  }
}
