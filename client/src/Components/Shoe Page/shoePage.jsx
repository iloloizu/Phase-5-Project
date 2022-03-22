import React, {useEffect,
     useState
    } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Container, Card, Button } from 'react-bootstrap'
import ShoeCard from './shoeCard';
import Category from "./Category";

function ShoePage() {
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
    // fetchFromStore={fetchFromStore}
  /> )

  return (
    <>
      <Container>
       <Category filter={filter} category={category} />
        <div className='card-holder' >
          {shoeCards}
        </div>
      </Container>
    </>
  )
}

export default ShoePage;