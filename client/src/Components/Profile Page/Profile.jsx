import React from "react";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { Container, Button } from 'react-bootstrap'

function Profile() {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        fetch('/users/1')
            .then(r => r.json())
            .then(data => setUserData(data))
        }, [])

    const user = useSelector((state) => userData)
        // (state) => state.user.value);

    return (
        <Container>
            <h1>Welcome back, {user.username}! 👋🏾</h1>
            <p> Shoe Size: {user.size}</p>
            <p> Email: {user.email}</p>  
            <p> Phone: {user.phone}</p>  
            <p> Primary Color: {user.color1}</p>  
            <p> Secondary Color: {user.color2}</p>  
        </Container>
    );
}

export default Profile;