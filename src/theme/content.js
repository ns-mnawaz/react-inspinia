import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  render() {
    return (
      <div className="wrapper wrapper-content animated fadeIn">
        {this.props.children}
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.array.isRequired
};

export default Content;
