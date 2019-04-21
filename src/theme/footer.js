import React, { Component } from 'react';
import CopyRight from './copyRight';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="pull-right">
                    10GB of <strong>250GB</strong> Free.
        </div>
        <CopyRight/>
      </div>
    );
  }
}
