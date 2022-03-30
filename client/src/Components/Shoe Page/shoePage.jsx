import React, {useEffect,
     useState
    } from 'react';
import { useDispatch, useSelector} from "react-redux";
import ShoeCard from './shoeCard';
import Category from "./Category";
import AddShoe from './AddShoe';

function ShoePage({setFavorites, favorites, cartItem, setCartItem}) {
  const fetchFromStore = useSelector((state) => state.sneakers.entities)

  const allShoes = ['All', ...new Set(fetchFromStore.map(shoe => shoe.brand))];
  
  const [category, setCategory] = useState(allShoes);
  const [menuItems, setMenuItems] = useState(fetchFromStore);

  const filter = (category) =>{
      if(category === 'All'){
          setMenuItems(fetchFromStore)
          return;
      }
      const filteredData  = fetchFromStore.filter((item)=>{
          return item.brand === category;
      })
      setMenuItems(filteredData);
  }
  
  const shoeCards = menuItems.map((shoe)=>
  
  <ShoeCard
    key = {shoe.id}
    id = {shoe.id}
    name={shoe.name}
    colorway={shoe.colorway}
    description={shoe.description}
    image={shoe.image}
    link={shoe.link}
    price={shoe.price}
    brand={shoe.brand}
    setFavorites={setFavorites}
    favorites={favorites}
    cartItem={cartItem}
    setCartItem={setCartItem}
    // fetchFromStore={fetchFromStore}
  /> )

  return (
    <div className ="shop-holder">
      <h1 className="sneaker-title">Manage your Inventory</h1>
      <h3 className="sneaker-subtitle">Add, Organize, Sort, Delete, and Manage all of the shoes in your Vault.</h3> 
       <Category filter={filter} category={category} />
        <div className='card-holder' >
          {shoeCards}
          <AddShoe
          menuItems={menuItems}
          />
        </div>
     
    </div>
  )
}

export default ShoePage;