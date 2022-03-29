import React from "react";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { Container } from 'react-bootstrap'
import {GoogleMap, LoadScript} from "@react-google-maps/api"

function Profile() {
    const [userData, setUserData] = useState("");

    const defaultCenter = {
        lat: 29.7604,
        lng: -95.3698,
        };

    const mapStyles = {
        height: "100vh",
        width: "100%"
        };

    useEffect(() => {
        fetch('/users/1')
            .then(r => r.json())
            .then(data => setUserData(data))
        }, [])

    const user = useSelector((state) => userData)
    console.log(userData)

    return (
        <div>
            <Container>
                <div className="profile">
                    <h1>Welcome back, {user.username}.</h1>
                    <p> Shoe Size: {user.size}</p>
                    <p> Email: {user.email}</p>  
                    <p> Phone: {user.phone}</p>  
                    <p> Address: {user.address}</p> 
                    <LoadScript googleMapsApiKey="AIzaSyDi55tk3__Yr9Hz16Uy6kOsHmwk571dPTE">
                        <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                        />
                    </LoadScript>
                </div>
            </Container>
        </div>
    );
}

export default Profile;