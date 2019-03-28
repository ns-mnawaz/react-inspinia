import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MenuItem from './menuItem';
import MenuTree from './menuTree';
import profileSmall from '../assets/img/profileSmall.jpg';
import { smoothlyMenu } from './helpers/helpers';
import $ from 'jquery';

class Navigation extends Component {
  componentWillUpdate(nextProps, nextState) {
    $('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }

  componentDidMount() {
    const { menu } = this.refs;
    $(function() {
      $(menu).metisMenu({
        toggle: true
      });
    });
  }

  render() {
    return (
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu" ref="menu" style={{ zIndex: 2000 }}>
            <li className="nav-header">
              <div className="dropdown profile-element">
                <img alt="image" className="rounded-circle" src={profileSmall}/>
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                  <span className="block m-t-xs font-bold">David Williams</span>
                  <span className="text-muted text-xs block">Art Director <b className="caret" /></span>
                </a>
                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                  <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                  <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                  <li><a className="dropdown-item" href="mailbox.html">Mailbox</a></li>
                  <li className="dropdown-divider" />
                  <li><a className="dropdown-item" href="login.html">Logout</a></li>
                </ul>
              </div>
              <div className="logo-element">
                                FC+
              </div>
            </li>
            {/* menu */}
            <MenuItem path="/home" icon="home" label="Home" />
            <MenuTree icon="building-o" label="General">
              <MenuItem path="/page1" label="Page Example 1" tree />
              <MenuItem path="/page2" label="Page Example 2" tree />
              <MenuTree icon="building-o" label="General">
                <MenuItem path="/page1" label="Page Example 1" tree />
                <MenuItem path="/page2" label="Page Example 2" tree />
              </MenuTree>
            </MenuTree>
            <MenuTree icon="building-o" label="General">
              <MenuItem path="/page1" label="Page Example 1" tree />
              <MenuItem path="/page2" label="Page Example 2" tree />
            </MenuTree>
            <MenuTree icon="building-o" label="General">
              <MenuItem path="/page1" label="Page Example 1" tree />
              <MenuItem path="/page2" label="Page Example 2" tree />
            </MenuTree>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({ });
const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
