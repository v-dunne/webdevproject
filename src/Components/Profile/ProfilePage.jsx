import { useNavigate, useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileGrid from "./ProfileGrid";
import Navbar from "../Navigation/Navbar.jsx";
import { logoutUser } from "../../Services/AuthService.js"


export default function ProfilePage() {

    const { id } = useParams();  // Get the user ID from the URL parameters

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutUser();
            navigate("/auth/login")
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <div className="profilePage">
            <Navbar />
            <h1>This is the Profile Page</h1>

            <button onClick={handleLogout}>Logout</button>

            <ProfileHeader userId={id} />
            <hr />
            <ProfileGrid userId={id} />
        </div>
    );
}



