import $ from 'jquery';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';

import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import CopyRight from '../../theme/copyRight';
import { login } from '../../redux/actions/user';
import config from '../../config';
import { createLoadingSelector, createErrorMessageSelector } from '../../redux/api/selectors';
import LockForm from '../forms/lock';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

class Lock extends Component {
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
        <div className="lock-word animated fadeInDown">
          <span className="first-word">LOCKED</span><span>SCREEN</span>
        </div>
        <div className="middle-box text-center lockscreen animated fadeInDown" style={{ paddingBottom: '40px' }}>
          <div>
            <div className="m-b-md">
              <img alt="image" className="img-circle circle-border"
                src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg" />
            </div>
            <h3>John Smith</h3>
            <p>App was shut down and you need to enter your password to go back to app.</p>
            <LockForm onSubmit={this.submitForm} />
          </div>
          <Link to="/login?refresh=true">
            <small>Not this account?</small>
          </Link>
          <br/> <br/>
          <CopyRight/>
        </div>
      </div>
    );
  }

  // submitForm = (values) => {};
  submitForm = () => {};

  login = () => {
    const payload = {
      grant_type: config.auth.GRANT_TYPE,
      client_id: config.auth.CLIENT_ID,
      client_secret: config.auth.CLIENT_SECRET,
      username: this.state.email,
      password: this.state.password
    };
    this.props.login(payload);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
}

Lock.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const loadingSelector = createLoadingSelector(['AUTH']);
const errorSelector = createErrorMessageSelector(['AUTH']);

const mapStoreToProps = (state) => ({ user: state.user, isFetching: loadingSelector(state), error: errorSelector(state) });
const mapDispatchToProps = (dispatch) => bindActionCreators({ login }, dispatch);

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Lock));
