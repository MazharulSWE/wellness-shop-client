import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
import  useAuth  from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    console.log(isLoading, user.email, user.displayName);
  if (isLoading) {
    return (
      <div>
        <h4 style={{ color: "red" }}>Loading Data....</h4>
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;