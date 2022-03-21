import React, {useEffect,
     useState
    } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Card, Button } from 'react-bootstrap'
import ShoeCard from './shoeCard';

function ShoePage() {
  
  const fetchFromStore = useSelector((state) => state.sneakers.entities)

  const shoeCards = fetchFromStore.map((shoe)=>
  
  <ShoeCard
    // key = {shoe.id}
    // id = {shoe.id}
    // name={shoe.name}
    // colorway={shoe.colorway}
    // description={shoe.description}
    // image={shoe.image}
    // link={shoe.link}
    // price={shoe.price}
    fetchFromStore={fetchFromStore}
  /> )

  return (
    <div>
      {shoeCards}
    </div>
  )
}

export default ShoePage;