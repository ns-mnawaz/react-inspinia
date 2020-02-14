import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Checkbox } from 'react-icheck';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import logo from '../../assets/img/logo.png';
import CopyRight from '../../theme/copyRight';
import { toastr } from 'react-redux-toastr';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

class Register extends Component {
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
          <p>Create account to see it in action.</p>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-user"/></span>
            <input type="name" id="name" name="name" className="form-control" placeholder={'Name'} required=""/>
          </div>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-at"/></span>
            <input type="email" id="email" name="email" className="form-control" placeholder={'Email'} required=""/>
          </div>
          <div className="form-group input-group m-b">
            <span className="input-group-addon"><i className="fa fa-key"/></span>
            <input type="password" id="password" name="password" className="form-control" placeholder={'Password'} required=""/>
          </div>
          <div className="text-left">
            <Checkbox
              checkboxClass="icheckbox_square-green aggree_policy"
              increaseArea="20%"
              checked={this.state.checked}
              onChange={this.handleChange}
              name="checked"
              cursor="pointer"
              label="<span class='checkbox-label'>Agree the terms and policy</span>"
            />
          </div>
          <button type="button" id="register_button" className="btn btn-primary block full-width m-b" onClick={this.register}>Register</button>
          <Link to="/activate">
            <small>Activate your account?</small>
          </Link>
          <p className="text-muted text-center">
            <Link to="/login">Already have an account?</Link>
          </p>
          <Link className="btn btn-sm btn-white btn-block" to="/login" id="login_button">Login</Link>
          <Link className="btn btn-sm btn-white btn-block" to="/activate">Activate Account</Link>
          <br/>
          <CopyRight/>
        </div>
      </div>
    );
  }
  handleChange = (e, value) => {
    this.setState({ [e.target.name]: value });
  };
  register = () => {
    toastr.success('Get Hired!', 'Welcome to Get Hired! Please login to see magic in action');
    this.props.history.push('/login');
  }
}

Register.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Register);
