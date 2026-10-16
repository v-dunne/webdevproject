// import {useState, useEffect} from "react";

export default function ProfileHeader({ userId }) {

    return (
        <div>
            <img src="temp/path" alt="User {userId} Profile Picture"></img>
            <h1>This is the profile header for user {userId}</h1>
            <p>This is some additional information about the user.</p>
        </div>
    )

}