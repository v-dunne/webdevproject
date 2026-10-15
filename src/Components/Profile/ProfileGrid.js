import { useState, useEffect } from "react";

/**
 * ProfileGrid Component
 * Renders the profiles's picture, bio, and a grid of the profile's posted meals
 */
export default function ProfileGrid({ userId, posts }) {

    // Fetch meals for the user when the component mounts
    useEffect(() => {
        fetch(`/api/meals?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setMeals(data))
            .catch((error) => console.error("Error fetching meals:", error));
    }, [userId]);

    return (
        <div className="profileGrid"> 
            <p>This is the Profile Grid Should be a flexbox styled in css</p>
            
        
        
        </div>

    );
}

