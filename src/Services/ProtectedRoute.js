import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({element: Component}) => {
    const navigate = useNavigate();

    const buttonHandler = () => {
        navigate("/login");
    };

    const isAuthenticated = Boolean(Parse.User.current() && Parse.User.current().authenticated());

    return (
        <div>
            {isAuthenticated ? (
                <Component />
            ) : (
                <div>
                    <p>Unauthorized!</p>
                    <button onClick={buttonHandler}>Go Back </button>
                </div>
            )}
        </div>
    );

};

export default ProtectedRoute;