import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import EnhancedSwitch from 'react-icheck/lib/EnhancedSwitch';
import { correctHeight, detectBody } from '../../theme/helpers/helpers';
import '../../assets/dependencies';
import logo from '../../assets/img/logo.png';
import CopyRight from '../../theme/copyRight';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'react-router-dom';
import ActivateForm from '../forms/active';

EnhancedSwitch.propTypes = {
  ...EnhancedSwitch.propTypes,
  cursor: PropTypes.string
};

class Activate extends Component {
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
          <p>Activate account to see it in action.</p>

          <ActivateForm onSubmit={this.activate} />

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

  activate = () => {
    toastr.success('Get Hired!', 'You account is activated. Please login to see magic in action.');
    this.props.history.push('/login');
  };
}

Activate.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Activate);
