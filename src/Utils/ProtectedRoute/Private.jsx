import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useThemeContextValue } from "../context/ThemeContext";

const Private = () => {

    const token = localStorage.getItem('token');
    // let auth = {'token': false}

    // outlet in the fav page wraping the fav route with private component route
    
    return (
        token ? <Outlet/> : <Navigate to='/login' />
    )
}

export default Private;