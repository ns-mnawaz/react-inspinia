import $ from 'jquery';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { get, isEmpty } from 'lodash';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';

import '../../assets/dependencies';
import config from '../../config';
import LoginForm from '../forms/login';
import logo from '../../assets/img/logo.png';
import CopyRight from '../../theme/copyRight';
import Loading from '../../theme/loading';
import { login } from '../../redux/actions/user';
import * as auth from '../../helpers/auth';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import { createLoadingSelector, createErrorMessageSelector } from '../../redux/api/selectors';
import { toastr } from 'react-redux-toastr';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // eslint-disable-next-line func-names
    $(window).bind('load resize', function() {
      correctHeight();
      detectBody();
    });
  }

  static getDerivedStateFromProps(nextProps) {
    if (!isEmpty(get(nextProps, 'user.auth')) && auth.isAuth()) {
      nextProps.history.push('/app/home');
    }
    return null;
  }

  render() {
    if (this.props.loading) {return <Loading/>;}
    if (this.props.error) {toastr.error('Get Hired!', this.props.error);}

    return (
      <div className="gray-bg">
        <div className="middle-box text-center loginscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <Link className="nav-link" to="">
            <img alt="" className="img-circle logo" src={logo}/>
          </Link>
          <h3>Get Hired!</h3>
          <p>Login in. To see it in action.</p>

          <LoginForm onSubmit={this.login} />

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

  login = (values) => {
    const payload = {
      grant_type: config.auth.GRANT_TYPE,
      client_id: config.auth.CLIENT_ID,
      client_secret: config.auth.CLIENT_SECRET,
      username: values.email,
      password: values.password
    };
    this.props.login(payload);
  };
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

const loadingSelector = createLoadingSelector(['AUTH']);
const errorSelector = createErrorMessageSelector(['AUTH']);

const mapStoreToProps = (state) => ({ user: state.user, loading: loadingSelector(state), error: errorSelector(state) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Login));
