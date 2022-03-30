import React from "react";
import { useSelector } from "react-redux";
import {useEffect, useState} from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api"

function ProfilePage() {
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
                <div className="profile">
                    <h1 className="sneaker-title">Welcome back, {user.username}</h1>
                    <hr/>
                    <h3 className="sneaker-subtitle">Your Information:</h3>
                    <h5> Shoe Size: {user.size}</h5>
                    <h5> Email: {user.email}</h5>  
                    <h5> Phone: {user.phone}</h5>
                    <h5> Address: {user.address}</h5> 
                    <hr/>

                    <LoadScript googleMapsApiKey="AIzaSyDi55tk3__Yr9Hz16Uy6kOsHmwk571dPTE">
                        <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={defaultCenter}
                        />
                    </LoadScript>
                </div>
    );
}

export default ProfilePage;