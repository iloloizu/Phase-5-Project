import React, { useEffect, useState } from "react";
import Login from '../Login/Login.jsx';
import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from '../NavBar/NavBar.jsx';
import { Container, Alert } from 'react-bootstrap' 
import "./App.css"

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  useEffect(() => {
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
    navigate("/");
}

  if (!user) return (
    <>
    <Container>
      <Alert className="mt-3" variant="primary" >Please Login OR Signup To Create A New Account</Alert>
    </Container>
    <Login  onLogin={setUser}/>
    </>
  )

  return (
    <div className="App">
      <NavBar user={user} handleLogOutClick={handleLogOutClick} />
          // [Some routes ...]
    </div>
  );
}

export default App;