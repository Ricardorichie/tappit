/* eslint-disable react/display-name */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const withAuthentication = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const location = useLocation();
    if (location.state === null) {
      return <Navigate to="/" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
