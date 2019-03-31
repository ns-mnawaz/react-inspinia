/* eslint-disable jsx-a11y/anchor-is-valid */
import $ from 'jquery';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Progress from './theme/progress';
import Navigation from './theme/navigation';
import TopHeader from './theme/topHeader';
import Footer from './theme/footer';
import { correctHeight, detectBody } from './theme/helpers/helpers';

import './assets/dependencies';

import Dashboard from './components/pages/dashboard';
import Page1 from './components/pages/page1';
import Home from './components/pages/home';
import NotFound from './components/common/notFound';

export default class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: props.match
    };
  }

  componentDidMount() {
    // eslint-disable-next-line func-names
    $(window).bind('load resize', function() {
      correctHeight();
      detectBody();
    });
  }

  render() {
    return (
      <div id="wrapper">
        <Progress />
        <Navigation />
        <div id="page-wrapper" className="gray-bg">
          <TopHeader />
          <Switch>
            <Route path={`${this.state.match.url}`} exact component={Home} />
            <Route path={`${this.state.match.url}/page1`} exact component={Page1} />
            <Route path={`${this.state.match.url}/dashboard`} exact component={Dashboard} />
            <Route path={`${this.state.match.url}/home`} exact component={Home} />
            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

