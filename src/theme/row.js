import React from 'react';
import PropTypes from 'prop-types';

const Row = (props) => <div className="row">{props.children}</div>;

Row.propTypes = {
  children: PropTypes.element.isRequired
};

export default Row;
