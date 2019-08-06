import React from 'react';
import PropTypes from 'prop-types';

const Column = (props) => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);

Column.propTypes = {
  span: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.element
};

export default Column;
