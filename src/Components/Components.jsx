import Home from "./Home/Home.jsx";
import Profile from "./Profile/ProfilePage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navigation/Navbar.jsx";
import ProtectedRoute from "../Services/ProtectedRoute.js";

const Components = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile/1" element={<Profile />} />
        {/* Future routes can be added here as needed 
        - creating account
        - making post
        - login */}

        <Route path="/login" element={<AuthLogin />} />
        <Route path="/" element={<ProtectedRoute element={Home} />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;