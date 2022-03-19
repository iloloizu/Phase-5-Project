import React from 'react';
import { useState, useEffect } from 'react';
import ShopCard from './ShopCard';

export default function Shop() {
    const [shopItems, setShopItems] = useState([""])

    // useEffect(()=> {
    //     fetch('http://localhost:3000/sneakers')
    //         .then(r => r.json())
    //         .then(data => console.log(data))
    // }, [])

        // console.log(shopItems)
        // const shopItemMap = shopItems?.map((item)=>{
        // <ShopCard
        // key={item.id}
        // id={item.id}
        // item={item} />
        // })

  return (
    <div>Shop
        {/* {shopItemMap} */}
    </div>
  )
}
