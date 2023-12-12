
import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector((store) => store.isAuth);
    const location = useLocation();

    if (!isLoggedIn) {
        return <Navigate to="/login" replace state={{ data: location.pathname }} />;
    }
    return children;
};


export default PrivateRoute;