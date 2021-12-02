import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from './../Hooks/useAuth';

const AddEmpRoute = ({children, ...rest}) => {
    const { user, isLoading, empData } = useAuth();
    const location = useLocation();
    if (isLoading) { return <p>Loading ...</p> }
    if (user.email && empData.role === "admin" || empData.role ==="defaultAdmin") {
        return children;
      }
      return <Navigate to="/" state={{ from: location }} />;
};

export default AddEmpRoute;