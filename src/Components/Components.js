import Home from "./Home/Home.js";
import Profile from "./Profile/ProfilePage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Components = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile/:id" element={<Profile />} />
        {/* Future routes can be added here as needed 
        - creating account
        - making post
        - login */}
      </Routes>
    </Router>
  );
};

export default Components;