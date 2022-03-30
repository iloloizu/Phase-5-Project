import React, {useState} from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { updateSneakers } from '../../features/shoe';

function EditForm({onSubmit, handleClose, colorway, name, description, price, link, image, brand, id}) {    
    const dispatch = useDispatch();
    const [shoeName, setShoeName] = useState("");
    const [shoeColorway, setShoeColorway] = useState("");
    const [shoeDescription, setShoeDescription] = useState("");
    const [shoePrice, setShoePrice] = useState("");
    const [shoeLink, setShoeLink] = useState("");
    const [shoeImage, setShoeImage] = useState([]);
    const [shoeBrand, setShoeBrand] = useState("");

    function handleName(e) {
        setShoeName(e.target.value)
    }

    function handleColorway(e) {
        setShoeColorway(e.target.value)
    }

    function handleDescription(e) {
        setShoeDescription(e.target.value)
    }

    function handlePrice(e) {
        setShoePrice(e.target.value)
    }

    function handleLink(e) {
        setShoeImage(e.target.value)
    }

    function handleImage(e) {
        setShoeBrand(e.target.value)
    }

    function handleBrand(e) {
        setShoeLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        // const sneakerObj = {
        //     id: id,
        //     colorway: shoeColorway,
        //     name: shoeName,
        //     description: shoeDescription,
        //     price: shoePrice,
        //     link: shoeLink,
        //     image: shoeImage,
        //     brand: shoeBrand,
        //   };

        dispatch ( updateSneakers ({
            id: id,
            colorway: shoeColorway,
            name: shoeName,
            description: shoeDescription,
            price: shoePrice,
            link: shoeLink,
            image: shoeImage,
            brand: shoeBrand,
        }))
          .unwrap()
          .then((data) => {
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });

        setShoeName("");
        setShoeColorway("");
        setShoeDescription("");
        setShoePrice("");
        setShoeLink("");
        setShoeImage("");
        setShoeBrand("");
    
        handleClose()
      }

    return (
     <div>
            <Form class="form-group" onSubmit={handleSubmit}> 
                {/* <input onChange={handleName} className="mb-3" controlId="formBasicEmail"> */}
                <Form.Label for="exampleFormControlInput1">Shoe Name</Form.Label>
                <Form.Control 
                onChange={handleName}
                type="text"
                placeholder={"ex. Air Jordan 1 High"} 
                className="mb-3"
                controlId="formBasicEmail"/>
            {/* <div type="submit" style={{ textAlign: "center" }}>
                <button onSubmit={handleSubmit} className="form-input">New Villager</button>
            </div> */}
           
                <Form.Label>Colorway</Form.Label>
                <Form.Control 
                onChange={handleColorway} 
                type="text" 
                placeholder={colorway}
                value={colorway}
                className="mb-3"
                controlId="formBasic" />
          
                <Form.Label>Brand</Form.Label>
                <Form.Control onChange={handleBrand} type="text" placeholder={brand} value={brand}/>
            
                <Form.Label>Price</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control onChange={handlePrice} type="number" placeholder={price} value={price}/>
                </InputGroup>
            
                <Form.Label>Image Link</Form.Label>
                <Form.Control onChange={handleImage}  type="text" placeholder={image}/>

                <Form.Label>Link to Purchase</Form.Label>
                <Form.Control onChange={handleLink}  type="text" placeholder={link} />
  
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handleDescription} type="text" placeholder={description} />
            <br/>
            <Button className="right-button" variant="success" type="submit" onClick={handleSubmit}>
                    Submit
            </Button><br/><br/>
            <Button className="right-button" variant="secondary" onClick={handleClose} >
                    Close
            </Button>
        </Form>
</div>
)
}

export default EditForm