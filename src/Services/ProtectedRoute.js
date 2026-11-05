import { useNavigate } from "react-router-dom";
import { checkUserAuth } from "../Auth/AuthService"

const ProtectedRoute = ({element: Component, ...rest }) => {
    const navigate = useNavigate();


    const buttonHandler = () => {
        navigate("/login");
    };

    const isAuthenticated = Boolean(Parse.User.current() && Parse.User.current().authenticated());

    return (
            isAuthenticated ? (
                <Component />
            ) : (
                <Navigate to="\login" replace />
            )
    );

};

export default ProtectedRoute;