import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkUserAuth, createUser } from "../../Services/AuthService.js";
import AuthForm from "./AuthForm.jsx";


const AuthRegister = () => {
    const navigate = useNavigate();

    // Create state hook for current user
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
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
        if (!newUser ) return;
        try {
            await createUser(newUser);
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Registration failed:", error);
            alert("Unable to register. Please check your email and password.");
        }
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        const { name, value: newValue } = e.target;
        setNewUser((user) => ({...user, [name]: newValue}));
    };

    return (
        <div>
            <h2>Register</h2>
            <AuthForm user={newUser} isLogin={false} onSubmit={onSubmitHandler} onChildChange={onChangeHandler} />
            <button onClick={() => navigate("/auth/login")}>Login</button>
        </div>
    );
};
export default AuthRegister;