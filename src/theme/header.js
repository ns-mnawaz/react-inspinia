/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="row wrapper border-bottom white-bg page-heading">
        <div className="col-sm-4">
          <h2>{this.props.title}</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/app/home">Home</Link>
            </li>
            <li className="breadcrumb-item active">
              <strong>{this.props.title}</strong>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}
