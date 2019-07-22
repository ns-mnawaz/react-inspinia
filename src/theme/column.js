import React from 'react';
import PropTypes from 'prop-types';

const Column = (props) => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);

Column.propTypes = {
  span: PropTypes.element.isRequired,
  style: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
};

export default Column;
