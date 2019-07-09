import React from "react";
import {Route,Redirect} from "react-router-dom";
import {isAuth} from '../../helpers/auth';

export default ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Redirect
                    to={{
                        pathname: "/app/home",
                        state: { from: props.location }
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);