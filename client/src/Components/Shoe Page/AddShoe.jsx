import React from 'react'
import { Form, Card } from 'react-bootstrap'

function AddShoe() {
  return (
    <div>
        <Card style={{ width: '25rem' }}>
            <div className="form-card">
                <h2 className="form-title">Add New Sneakers</h2>
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
        </Card>
    </div>
  )
}

export default AddShoe