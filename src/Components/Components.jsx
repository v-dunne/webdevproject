import Home from "./Home/Home.jsx";
import Profile from "./Profile/ProfilePage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Services/ProtectedRoute.jsx";
import AuthLogin from "./Auth/AuthLogin.jsx";
import AuthRegister from "./Auth/AuthRegister.jsx";
import Auth from "./Auth/Auth.jsx";
import { Navigate } from "react-router-dom";

const Components = () => {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<ProtectedRoute element={Home} />} />
        <Route path="/Profile/1" element={<Profile />} />
        {/* Future routes can be added here as needed 
        - creating account
        - making post
        - login */}
        
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;