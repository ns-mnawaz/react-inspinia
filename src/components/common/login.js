import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Checkbox } from 'react-icheck';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import logo from '../../assets/img/logo.png';
import CopyRight from '../../theme/copyRight';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

export default class Login extends Component {
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
          <p>Login in. To see it in action.</p>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-at"/></span>
            <input type="email" name="email" className="form-control" placeholder={'Email'} required=""/>
          </div>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-key"/></span>
            <input type="password" name="password" className="form-control" placeholder={'Password'} required=""/>
          </div>
          <div className="text-left">
            <Checkbox
              checkboxClass="icheckbox_square-green"
              increaseArea="20%"
              checked={this.state.checked}
              onChange={this.handleChange}
              name="checked"
              cursor="pointer"
              label="<span class='checkbox-label'>Remember Me</span>"
            />
          </div>
          <Link to="/app/home">
            <button type="button" id="btnLogin" className="btn btn-primary block full-width m-b" >{'Login'}</button>
          </Link>
          <Link to="/activate">
            <small>Forgot Password?</small>
          </Link>
          <p className="text-muted text-center">
            <Link to="/register">Don't have an account?</Link>
          </p>
          <Link className="btn btn-sm btn-white btn-block" to="/activate">Activate Account</Link>
          <Link className="btn btn-sm btn-white btn-block" to="/register">Register</Link>
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
