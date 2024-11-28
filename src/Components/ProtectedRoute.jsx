import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function protectedRoute(){
    const userDetail = localStorage.getItem('UserDetail')
    console.log('Protected Route',userDetail)
    return userDetail  ? <Outlet/> : <Navigate to="login"/>
}

export default protectedRoute