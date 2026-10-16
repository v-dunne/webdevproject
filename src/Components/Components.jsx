import Home from "./Home/Home.jsx";
import Profile from "./Profile/ProfilePage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navigation/Navbar.jsx";

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
      </Routes>
    </Router>
  );
};

export default Components;