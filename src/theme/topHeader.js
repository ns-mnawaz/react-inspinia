/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { smoothlyMenu } from './helpers/helpers';
import $ from 'jquery';
import a4 from '../assets/img/a4.jpg';
import a7 from '../assets/img/a7.jpg';
import profile from '../assets/img/profile.jpg';
import * as auth from '../helpers/auth';
import PropTypes from 'prop-types';

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
              <span className="m-r-sm text-muted welcome-message">Welcome to Get Hired.</span>
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
                    <Link to="/app/inbox">
                      <i className="fa fa-envelope" /> <strong>Read All Messages</strong>
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                <i className="fa fa-bell" />  <span className="label label-primary">8</span>
              </a>
              <ul className="dropdown-menu dropdown-alerts">
                <li>
                  <a href="mailbox.html">
                    <div>
                      <i className="fa fa-envelope fa-fw" /> You have 16 messages
                      <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="profile.html">
                    <div>
                      <i className="fa fa-twitter fa-fw" /> 3 New Followers
                      <span className="pull-right text-muted small">12 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="grid_options.html">
                    <div>
                      <i className="fa fa-upload fa-fw" /> Server Rebooted
                      <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <div className="text-center link-block">
                    <a href="notifications.html">
                      <strong>See All Alerts </strong>
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={this.logout}> <i className="fa fa-sign-out"/> Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  logout = () => {
    auth.logout();
    this.props.history.push('/');
  };

  toggleNavigation(e) {
    e.preventDefault();
    $('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }
}

TopHeader.propTypes = {
  history: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ }, dispatch);
export default withRouter(connect(null, mapDispatchToProps)(TopHeader));
