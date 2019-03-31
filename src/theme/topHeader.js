/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { smoothlyMenu } from './helpers/helpers';
import $ from 'jquery';

class TopHeader extends Component {
  render() {
    return (
      <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
          <div className="navbar-header">
            <span className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={(e) => this.toggleNavigation(e)} style={{ cursor: 'pointer' }}><i className="fa fa-bars"/> </span>
            <form role="search" className="navbar-form-custom" method="post" action="#">
              <div className="form-group">
                <input type="text" placeholder="Faça sua pesquisa..." className="form-control" name="top-search" id="top-search" />
              </div>
            </form>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <Link to="/login"> <i className="fa fa-sign-out"/> Logout</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  toggleNavigation(e) {
    e.preventDefault();
    $('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch);
export default connect(null, mapDispatchToProps)(TopHeader);
