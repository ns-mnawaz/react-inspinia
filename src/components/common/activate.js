import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import logo from '../../assets/img/logo.png';
import CopyRight from '../../theme/copyRight';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

export default class Activate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  componentDidMount() {
    // eslint-disable-next-line func-names
    $(window).bind('load resize', function() {
      correctHeight();
      detectBody();
    });
  }

  render() {
    return (
      <div className="gray-bg" style={{ height: '100vh' }} >
        <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <Link className="nav-link" to="">
            <img alt="" className="img-circle" src={logo}/>
          </Link>
          <h3>Get Hired!</h3>
          <p>Activate account to see it in action.</p>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-at"/></span>
            <input type="email" name="email" className="form-control" placeholder={'Email'} required=""/>
          </div>
          <button type="button" id="btnLogin" className="btn btn-primary block full-width m-b">Activate</button>
          <Link to="/register">
            <small>Don't have an account?</small>
          </Link>
          <p className="text-muted text-center">
            <Link to="/login">Already have an active account?</Link>
          </p>
          <Link className="btn btn-sm btn-white btn-block" to="/register">Register</Link>
          <Link className="btn btn-sm btn-white btn-block" to="/login">Login</Link>
          <br/>
          <CopyRight/>
        </div>
      </div>
    );
  }
  handleChange = (e, value) => {
    this.setState({ [e.target.name]: value });
  };
}
