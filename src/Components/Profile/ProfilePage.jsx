import { useParams } from "react-router-dom";
// import React, { useState, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileGrid from "./ProfileGrid";
import Navbar from "../Navigation/Navbar.jsx";


export default function ProfilePage() {

    const { id } = useParams();  // Get the user ID from the URL parameters

    return (
        <div className="profilePage">
            <Navbar />
            <h1>This is the Profile Page</h1>
            <ProfileHeader userId={id} />
            <hr />
            <ProfileGrid userId={id} />
        </div>
    );
}



