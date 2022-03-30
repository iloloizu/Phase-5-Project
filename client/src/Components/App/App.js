import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch,
   useSelector
   } from "react-redux";
import "./App.css"

//components
import Login from '../Login/Login.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import { fetchSneakers } from "../../features/shoe";

//Pages
import Home from "../HomePage/Home.jsx";
import ShoePage from "../Shoe Page/shoePage";
import Shop from "../Shop/Shop.jsx"
import ProfilePage from "../Profile Page/ProfilePage";
import NewsPage from "../NewsPage/NewsPage";
import Three from "../Three";
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
    <div className="App" style={isClicked ? ( {backgroundColor: `#181818`}) : (
      // {backgroundColor: `${colorUser.color1}`}
      {backgroundImage: `linear-gradient(135deg, ${colorUser.color1}, ${colorUser.color2})`}
      )}>
          <NavBar 
          user={user} 
          handleLogOutClick={handleLogOutClick}
          isClicked={isClicked}
          darkMode={darkMode}
          favorites={favorites}
          cartItem={cartItem}
          setCartItem={setCartItem}
          userData={userData}
          />
          
          <div className="main-container">
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
            <Route exact path="/profile" element={<ProfilePage/>} />
            <Route exact path="/news" element={<NewsPage/>} />
            <Route exact path="/three" element={<Three/>} />
            <Route exact path="/" element={<Home/>} />
          </Routes>
          </div>
          <div className="starfield">
            <div id='stars'></div>
          </div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          
        

        <footer style={isClicked ? ({backgroundImage: `linear-gradient(135deg, ${colorUser.color1}, ${colorUser.color2})`}) : (
          // {backgroundColor: `${colorUser.color1}`}
          {backgroundColor: `#181818`}
          )} >
          <p className="center">©2022 Ilolo Izu | <a href="https://iloloizu.netlify.app/">Projects and Portfolio</a> </p>
          <div className="invisible">
          <Cart  
          cartItem={cartItem}
          setCartItem={setCartItem}
          />
          </div>
        </footer>
    </div>

  );
}

export default App;