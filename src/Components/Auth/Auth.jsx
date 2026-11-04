import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkUserAuth } from "../../Services/AuthService.js";

const Auth = () => {
    const navigate = useNavigate();

    // redirect already authenticated users back to home
    useEffect(() => {
        if (checkUserAuth()) {
            alert("You are already logged in");
            navigate("/");
        }
    }, [navigate]);

    return <Navigate to="/auth/login" replace />;
}

export default Auth;