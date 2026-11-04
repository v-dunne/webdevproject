import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUserAuth, loginUser } from "../../Services/AuthService.js";
import AuthForm from "./AuthForm.jsx";


const AuthLogin = () => {
    const navigate = useNavigate();

    // Create state hook for current user
    const [currentUser, setCurrentUser] = useState({
        email: "",
        password: "",
    });
    
    // Redirect already authenticated users back to home
    useEffect(() => {
        if (checkUserAuth()) {
            alert("You are already logged in");
            navigate("/");
        }
    }, [navigate]);
    
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!currentUser ) return;
        try {
            const userLoggedIn = await loginUser(currentUser);
            if (userLoggedIn) {
                alert(`${userLoggedIn.get("firstName")}, you successfully logged in!`);
                navigate("/");
            } else {
                alert("Incorrect email or password.");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("Unable to log in. Please check your email and password.");
        }
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setCurrentUser({...currentUser, [name]: newValue});
    };

    return (
        <div>
            <h2>Login</h2>
            <AuthForm user={currentUser} isLogin={true} onSubmit={onSubmitHandler} onChildChange={onChangeHandler} />
            <button onClick={() => navigate("/auth/register")}>Register</button>
        </div>
    );
};
export default AuthLogin;