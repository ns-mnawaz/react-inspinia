import $ from 'jquery';
import React, { Component } from 'react';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';

import '../../assets/dependencies';

export default class NotFound extends Component {
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
        <div className="gray-bg" style={{ height: '100vh' }}>
          <div className="middle-box text-center loginscreen animated fadeIn">
            <h1 className="logo-name"> M+ </h1>
            <h3> Get Hired! </h3>
            <p> Route Not Found </p>
          </div>
        </div>
      </div>
    );
  }
}
