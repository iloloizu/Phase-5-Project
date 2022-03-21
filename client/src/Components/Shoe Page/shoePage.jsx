import React, {useEffect,
     useState
    } from 'react';
import { useDispatch, useSelector} from "react-redux";

function ShoePage() {
  
  const fetchFromStore = useSelector((state) => state.sneakers.entities)

  console.log(fetchFromStore)
  console.log("hi")
  // const [shoeData, setShoeData] = useState([''])

  // useEffect(() => {
  //   fetch('http://localhost:3000/sneakers/1')
  //     .then(r => r.json())
  //     .then(data => setShoeData(data))
  // }, [])  

  // console.log(shoeData)

  return (
    <div>shoe Page</div>
  )
}

export default ShoePage;