import React from 'react'
import { Form } from 'react-bootstrap'

function EditForm({colorway, name, description, price, link, image}) {
  return (
    <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Shoe Name</Form.Label>
                <Form.Control type="text" placeholder="ex. Air Jordan 1 High" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Colorway</Form.Label>
                <Form.Control type="text" placeholder="ex. Bred (2016)" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Brand</Form.Label>
                <Form.Control type="text" placeholder="ex. Jordan" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="ex. 170" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Image Link</Form.Label>
                <Form.Control type="text" placeholder="Image Link" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Link to Purchase</Form.Label>
                <Form.Control type="text" placeholder="Link to Purchase" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder='ex. "Jordan Brand reintroduced the "OG" versions of..."' />
            </Form.Group>
        </Form>
    </div>
)
}

export default EditForm