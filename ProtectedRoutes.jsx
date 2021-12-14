import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';



const ProtectedRoutes = () => {

    let isAuth = JSON.parse(localStorage.getItem('isAuth'))




    return isAuth ? <Outlet /> : <Navigate to="/sign-in" />
}

export default ProtectedRoutes


