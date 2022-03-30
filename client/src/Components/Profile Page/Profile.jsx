import React from "react";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";

function Profile() {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetch('/users/1')
            .then(r => r.json())
            .then(data => setUserData(data))
        }, [])

    const user = useSelector((state) => userData)
    console.log(userData)

    return (
        <>
                    <h1 className="sneaker-title">Welcome back to the Lab, {user.username}</h1>
        </>
    );
}

export default Profile;