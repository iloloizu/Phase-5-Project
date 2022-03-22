import React from 'react'
import { Form } from 'react-bootstrap'

function EditForm({colorway, name, description, price, link, image, brand}) {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Shoe Name</Form.Label>
                <Form.Control type="text" placeholder={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Colorway</Form.Label>
                <Form.Control type="text" placeholder={colorway} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder={brand} />
            </Form.Group>

            <Form.Group className="mb-3" controlId={"formBasicPassword"}>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder={price} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Link</Form.Label>
                <Form.Control type="text" placeholder={image} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Link to Purchase</Form.Label>
                <Form.Control type="text" placeholder={link} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder={description} />
            </Form.Group>
        </Form>
    </div>
)
}

export default EditForm