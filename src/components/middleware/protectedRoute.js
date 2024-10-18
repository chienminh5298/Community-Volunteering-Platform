import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    // const isAuthenticated = !!localStorage.getItem("jwt");
    const isAuthenticated = true;

    return isAuthenticated ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
