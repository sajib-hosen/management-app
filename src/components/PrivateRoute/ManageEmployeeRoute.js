import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from './../Hooks/useAuth';

const ManageEmployeeRoute = ({ children, ...rest }) => {
    const { user, isLoading, empData } = useAuth();
    const location = useLocation();
    console.log( empData )
    console.log( empData.accessArea )
    if (isLoading) { return <p>Loading ...</p> }
    if (user.email && empData.role === 'defaultAdmin' || empData.accessArea?.manageEmployee === true) {
        return children;
      }
      return <Navigate to="/" state={{ from: location }} />;
};

export default ManageEmployeeRoute;