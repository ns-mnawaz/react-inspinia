import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../../helpers/auth';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth() ? (
        <Redirect
          to={{
            pathname: '/app/home',
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PublicRoute.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.element.isRequired
};

export default PublicRoute;
