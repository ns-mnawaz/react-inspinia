import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = (props) => (
  <li>
    <Link to={props.path}>
      { props.icon && <i className={`fa fa-${props.icon}`} /> }
      { props.tree ? props.label : <span className="nav-label">{props.label}</span> }
    </Link>
  </li>
);

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  tree: PropTypes.bool
};

export default MenuItem;
