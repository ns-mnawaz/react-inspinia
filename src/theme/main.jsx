import $ from 'jquery';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Progress from './progress';
import Navigation from './navigation';
import TopHeader from './topHeader';
import Footer from './footer';
import { correctHeight, detectBody } from './helpers/helpers';

import '../assets/dependencies';

export default class Main extends Component {
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
        <BrowserRouter>
          <div>
            <Progress />
            <Navigation />
            <div id="page-wrapper" className="gray-bg">
              <TopHeader />
              <div className="middle-box text-center loginscreen animated fadeInDown">
                <div className="body">
                  <h3>Welcome to True API Test</h3>
                  <p>Login in. To see it in action.</p>
                  <form className="m-t" role="form" action="#">
                    <div className="form-group">
                      <input type="email" name="email" className="form-control" placeholder={'Email'} required=""/>
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" className="form-control" placeholder={'Password'} required=""/>
                    </div>

                    <div className="form-group">
                      <p> hello world </p>
                    </div>
                    <button type="button" id="btnLogin" className="btn btn-primary block full-width m-b">{'Login'}</button>
                    <a href="#">
                      <small>ForgotPassword</small>
                    </a>
                    <p className="text-muted text-center">
                      <small>Donothaveanaccount</small>
                    </p>
                    <a className="btn btn-sm btn-white btn-block" href="#">CreateAnAccount</a>
                    <a className="btn btn-sm btn-white btn-block" href="#">ActivateAccount</a>
                  </form>
                  <p className="m-t">
                    <small>&copy; 2019 Avanza Solutions. All rights reserved</small>
                  </p>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
