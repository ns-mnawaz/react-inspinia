import React, { Component, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import PublicRoute from './components/common/publicRoute';
import PrivateRoute from './components/common/privateRoute';
import Landing from './components/common/landing';
import NotFound from './components/common/notFound';
import WaitingComponent from './theme/waiting';
import './assets/dependencies';

const Login = lazy(() => import('./components/common/login'));
const Lock = lazy(() => import('./components/common/lock'));
const Activate = lazy(() => import('./components/common/activate'));
const Register = lazy(() => import('./components/common/register'));
const AppRoutes = lazy(() => import('./appRoutes'));

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PublicRoute path="/" exact component={Landing} />
          <PublicRoute path="/login" component={WaitingComponent(Login)} />
          <PublicRoute path="/lock" component={WaitingComponent(Lock)} />
          <PublicRoute path="/activate" component={WaitingComponent(Activate)} />
          <PrivateRoute path="/app" component={WaitingComponent(AppRoutes)} />
          <PublicRoute path="/register" component={WaitingComponent(Register)} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}
