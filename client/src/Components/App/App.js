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
import Galaxy from "../ThreeJS Components/Galaxy";

//Pages
import Home from "../HomePage/Home.jsx";
import ShoePage from "../Shoe Page/shoePage";
import Shop from "../Shop/Shop.jsx"
import Profile from "../Profile Page/Profile";
import NewsPage from "../NewsPage/NewsPage";
import Three from "../Three";
import Holder from "../ThreeJS Components/Holder";
import Cart from "../Shop/Cart";

function App() {
  const [userData, setUserData] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cartItem, setCartItem] = useState([]);

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
    <Login onLogin={setUser}/>
    </>
  )
    //dark mode
  function darkMode() {
    setIsClicked(isClicked => !isClicked);
  }

  
  // favorites


//   function handleLike() {
//     // setCart([...cart, food[position]])
//     const currentFood = food[position]
//     const allFoods = [...userData['foods'], currentFood]
//     const addedToUsers= {...userData, foods: allFoods}
//     setUserData(addedToUsers)
    
//     fetch(`http://localhost:9292/likes/${currentFood['id']}/${userData["id"]}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: "",
//     })
//       .then((r) => r.json())
// }


  return (
    <div className="App" style={isClicked ? ( {backgroundColor: `#181818`, color: `${colorUser.color2}`}) : ({backgroundColor: `${colorUser.color1}`})} >
      <div className=".container">
        <div className="stars">
          <NavBar 
          user={user} 
          handleLogOutClick={handleLogOutClick}
          isClicked={isClicked}
          darkMode={darkMode}
          favorites={favorites}
          />
            <Routes> 
              <Route exact path="/home" element={<Home/>} />
              <Route exact path="/shoes" element={<ShoePage 
              setFavorites={setFavorites}
              favorites={favorites} 
              cartItem={cartItem}
              setCartItem={setCartItem}
              />} />
              <Route exact path="/shop" element={<Shop
              setFavorites={setFavorites}
              favorites={favorites}
              cartItem={cartItem}
              setCartItem={setCartItem}
              />} />
              <Route exact path="/profile" element={<Profile/>} />
              <Route exact path="/news" element={<NewsPage/>} />
              <Route exact path="/three" element={<Three/>} />
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/cart" element={<Cart
              cartItem={cartItem}
              setCartItem={setCartItem}
              />} />
            </Routes>
        </div>
        </div>
        <canvas id="c"></canvas>
        <footer>
          <p className="center">©2022 Ilolo Izu</p>
        </footer>
    </div>

  );
}

export default App;