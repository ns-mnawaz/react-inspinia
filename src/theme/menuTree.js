/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const MenuTree = (props) => (
  <li>
    <a href="#">
      <i className={`fa fa-${props.icon}`}/>
      <span className="nav-label">{props.label}</span>
      <span className="fa arrow"/>
    </a>
    <ul className="nav nav-second-level collapse">
      {props.children}
    </ul>
  </li>
);

MenuTree.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
};

export default MenuTree;
