import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from './../Hooks/useAuth';

const DefaultAdminRoute = ( { children, ...rest } ) => {
    const { user, isLoading, empData } = useAuth();
    const location = useLocation();
    console.log( empData )
    if (isLoading) { return <p>Loading ...</p> }
    if (user.email && empData.role === 'defaultAdmin') {
        return children;
      }
      return <Navigate to="/" state={{ from: location }} />;
};

export default DefaultAdminRoute;