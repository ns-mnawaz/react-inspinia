/* eslint-disable linebreak-style */
import React from 'react';

export default (props) => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
