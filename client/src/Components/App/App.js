import React, { useEffect, useState } from "react";
// import Login from '../pages/Login';
import { Routes, Route, useNavigate } from "react-router-dom";
// import NavBar from './NavBar';
import {Container, Alert} from 'react-bootstrap';

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOutClick(){
    fetch("/logout",{
        method: "DELETE"
    }).then((r) => {
        if(r.ok){
            setUser(null);
        }
    });
    // Navigate to home page after logout and clear history
    navigate("/");
}

  if (!user) return (
    <>
    <Container>
      <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
    </Container>
    {/* <Login onLogin={setUser}/> */}
    </>
  )

  return (
    <div>
    {/* <NavBar user={user} handleLogOutClick={handleLogOutClick} /> */}
      // [Some routes ...]
    </div>
  );
}

export default App;