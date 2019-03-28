import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <div className="wrapper wrapper-content animated bounceIn">
        {this.props.children}
      </div>
    );
  }
}
