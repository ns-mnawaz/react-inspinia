/* eslint-disable linebreak-style */
import React from 'react';

export default (props) => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : 'btn';
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};
