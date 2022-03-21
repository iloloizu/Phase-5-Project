import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch,
   useSelector
   } from "react-redux";
import "./App.css"

//components
import Login from '../Login/Login.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import { Container, Alert, Button } from 'react-bootstrap' 
import { fetchSneakers } from "../../features/shoe";

//Pages
import Home from "../HomePage/Home.jsx";
import ShoePage from "../Shoe Page/shoePage";
import Shop from "../Shop/Shop.jsx"
import Profile from "../Profile Page/Profile";
import NewsPage from "../NewsPage/NewsPage";
import Three from "../Three";

function App() {
  const [userData, setUserData] = useState("");

  const [user, setUser] = useState(null);

  const navigate = useNavigate()
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSneakers());
  }, [dispatch]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/users/1')
        .then(r => r.json())
        .then(data => setUserData(data))
    }, [])

  const colorUser = useSelector((state) => userData)
  const shoeData = useSelector((state) => state.shoes)

  console.log(shoeData)

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
    <div className="App" style={{backgroundColor: `${colorUser.color1}`}}>
      <NavBar user={user} handleLogOutClick={handleLogOutClick}/>
        <Routes> 
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/shoes" element={<ShoePage/>} />
          <Route exact path="/shop" element={<Shop/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/news" element={<NewsPage/>} />
          <Route exact path="/three" element={<Three/>} />
          <Route exact path="/" element={<Home/>} />
        </Routes>
      
    </div>
  );
}

export default App;