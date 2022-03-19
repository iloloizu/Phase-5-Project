import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.css"

//components
import Login from '../Login/Login.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import { Container, Alert } from 'react-bootstrap' 
import { fetchShoes } from "../Shoe Page/Shoes.jsx";

//Pages
import Home from "../HomePage/Home.jsx";
import Shoes from "../Shoe Page/shoePage.jsx";
import Shop from "../Shop/Shop.jsx"
import Profile from "../Profile Page/Profile";

function App() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate()
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoes());
  }, [dispatch]);

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
    <Login onLogin={setUser}/>
    </>
  )

  return (
    <div className="App">
      <NavBar user={user} handleLogOutClick={handleLogOutClick}/>
      <Routes> 
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/shoes" element={<Shoes/>} />
        <Route exact path="/shop" element={<Shop/>} />
        <Route exact path="/profile" element={<Profile/>} />


      </Routes>
    </div>
  );
}

export default App;