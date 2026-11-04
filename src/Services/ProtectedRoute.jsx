import { Navigate } from "react-router-dom";
import { checkUserAuth } from "./AuthService.js";

const ProtectedRoute = ({element: Component}) => {
    const isAuthenticated = checkUserAuth();

    return isAuthenticated ? <Component /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;