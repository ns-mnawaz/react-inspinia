import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Checkbox } from 'react-icheck';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import logo from '../../assets/img/logo.png';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

export default class Register extends Component {
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
  handleChange = (e, value) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(value);
  };

  render() {
    return (
      <div className="gray-bg" style={{ height: '100vh' }} >
        <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <Link className="nav-link" to="">
            <img alt="" className="img-circle" src={logo}/>
          </Link>
          <h3>Register to Get Hired!</h3>
          <p>Create account to see it in action.</p>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-user"/></span>
            <input type="name" name="name" className="form-control" placeholder={'Name'} required=""/>
          </div>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-at"/></span>
            <input type="email" name="email" className="form-control" placeholder={'Email'} required=""/>
          </div>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-key"/></span>
            <input type="password" name="password" className="form-control" placeholder={'Password'} required=""/>
          </div>
          <div className="text-center">
            <Checkbox
              checkboxClass="icheckbox_square-green"
              increaseArea="20%"
              checked={this.state.checked}
              onChange={this.handleChange}
              name="checked"
              cursor="pointer"
              label="<span class='checkbox-label'>Agree the terms and policy</span>"
            />
          </div>
          <button type="button" id="btnLogin" className="btn btn-primary block full-width m-b">Register</button>
          <Link to="/app/home">
            <small>Already have an account?</small>
          </Link>
          <Link className="btn btn-sm btn-white btn-block" to="/app/home">Login</Link>
          <Link className="btn btn-sm btn-white btn-block" to="/app/home">Activate Account</Link>
          <p className="m-t">
            <small>&copy; 2019 Claytones Private Limited. All rights reserved</small>
          </p>
        </div>
      </div>
    );
  }
}
