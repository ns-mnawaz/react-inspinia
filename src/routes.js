import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/common/login';
import Landing from './components/common/landing';
import NotFound from './components/common/notFound';
import Register from './components/common/register';
import AppRoutes from './appRoutes';
import './assets/dependencies';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={AppRoutes} />
          <Route path="/register" component={Register} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
