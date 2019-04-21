import React, { Component, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/common/landing';
import NotFound from './components/common/notFound';
import WaitingComponent from './theme/waiting';
import './assets/dependencies';

const Login = lazy(() => import('./components/common/login'));
const Activate = lazy(() => import('./components/common/activate'));
const Register = lazy(() => import('./components/common/register'));
const AppRoutes = lazy(() => import('./appRoutes'));

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={WaitingComponent(Login)} />
          <Route path="/activate" component={WaitingComponent(Activate)} />
          <Route path="/app" component={WaitingComponent(AppRoutes)} />
          <Route path="/register" component={WaitingComponent(Register)} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
