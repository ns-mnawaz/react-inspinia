/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { smoothlyMenu } from './helpers/helpers';
import $ from 'jquery';
import a4 from '../assets/img/a4.jpg';
import a7 from '../assets/img/a7.jpg';
import profile from '../assets/img/profile.jpg';

class TopHeader extends Component {
  render() {
    return (
      <div className="row border-bottom">
        <nav className="navbar navbar-static-top" role="navigation" style={{ marginBottom: 0 }}>
          <div className="navbar-header">
            <span className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={(e) => this.toggleNavigation(e)} style={{ cursor: 'pointer' }}><i className="fa fa-bars"/> </span>
            <form role="search" className="navbar-form-custom" method="post" action="#">
              <div className="form-group">
                <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
              </div>
            </form>
          </div>
          <ul className="nav navbar-top-links navbar-right">
            <li>
              <span className="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                <i className="fa fa-envelope"/> <span className="label label-warning">16</span>
              </a>
              <ul className="dropdown-menu dropdown-messages">
                <li>
                  <div className="dropdown-messages-box">
                    <a href="profile.html" className="pull-left">
                      <img alt="" className="img-circle" src={a7}/>
                    </a>
                    <div className="media-body">
                      <small className="pull-right">46h ago</small>
                      <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br/>
                      <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                    </div>
                  </div>
                </li>
                <li className="divider" />
                <li>
                  <div className="dropdown-messages-box">
                    <a href="profile.html" className="pull-left">
                      <img alt="" className="img-circle" src={a4}/>
                    </a>
                    <div className="media-body ">
                      <small className="pull-right text-navy">5h ago</small>
                      <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br/>
                      <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                    </div>
                  </div>
                </li>
                <li className="divider" />
                <li>
                  <div className="dropdown-messages-box">
                    <a href="profile.html" className="pull-left">
                      <img alt="" className="img-circle" src={profile}/>
                    </a>
                    <div className="media-body ">
                      <small className="pull-right">23h ago</small>
                      <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br/>
                      <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                    </div>
                  </div>
                </li>
                <li className="divider" />
                <li>
                  <div className="text-center link-block">
                    <a href="mailbox.html">
                      <i className="fa fa-envelope" /> <strong>Read All Messages</strong>
                    </a>
                  </div>
                </li>
              </ul>
            </li>
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
