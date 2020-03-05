import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import logo from '../../assets/img/logo.png';
import CopyRight from '../../theme/copyRight';
import RegisterForm from '../forms/register';
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
      <div className="gray-bg">
        <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <Link className="nav-link" to="">
            <img alt="" className="img-circle logo" src={logo}/>
          </Link>
          <h3>Get Hired!</h3>
          <p>Create account to see it in action.</p>

          <RegisterForm onSubmit={this.register} />

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
