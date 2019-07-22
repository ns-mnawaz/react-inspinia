import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : 'btn';
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.element.isRequired,
  bsStyle: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.element.isRequired
};

export default Button;
