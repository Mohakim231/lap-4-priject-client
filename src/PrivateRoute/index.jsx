import React, { Component } from 'react'
import { Route,  Navigate } from 'react-router-dom';
import { useAuth } from '../context'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();
    return (
      <Route
        {...rest}
        render={props =>
          currentUser ? (
            <Component {...props} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    );
  }