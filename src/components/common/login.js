import $ from 'jquery';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Checkbox } from 'react-icheck';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';

import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import logo from '../../assets/img/logo.png';
import CopyRight from '../../theme/copyRight';
import { login } from '../../redux/actions/user';
import * as auth from '../../helpers/auth';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      email: '',
      password: ''
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
            <input type="email" name="email"
              onChange={this.handleChange}
              className="form-control" placeholder={'Email'}
              required=""/>
          </div>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-key"/></span>
            <input type="password" name="password"
              onChange={this.handleChange}
              className="form-control" placeholder={'Password'}
              required=""/>
          </div>
          <div className="text-left">
            <Checkbox
              checkboxClass="icheckbox_square-green"
              increaseArea="20%"
              checked={this.state.checked}
              onChange={this.handleCheckChange}
              name="checked"
              cursor="pointer"
              label="<span class='checkbox-label'>Remember Me</span>"
            />
          </div>
          <button type="button" id="btnLogin" className="btn btn-primary block full-width m-b" onClick={this.login}>{'Login'}</button>
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

  login = () => {
    const payload = {
      grant_type: 'password',
      client_id: 'client1',
      client_secret: 'secret',
      username: this.state.email,
      password: this.state.password
    };
    this.props.login(payload);
    auth.login({ token: 'token' });
    this.props.history.push('/app/home');
  };

  handleCheckChange = (e, value) => {
    this.setState({ [e.target.name]: value });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

Login.propTypes = {
  login: PropTypes.element.isRequired,
  history: PropTypes.element.isRequired
};


const mapStoreToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Login));
