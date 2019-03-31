import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/common/login';
import NotFound from './components/common/notFound';
import AppRoutes from './appRoutes';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={AppRoutes} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
