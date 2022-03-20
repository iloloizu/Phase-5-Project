import React, { useState } from "react";
import { Container, Form, Button, Alert, Dropdown, Row, Col } from 'react-bootstrap'


function SignUpForm({onLogin}){
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [size, setShoeSize] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email,
                username,
                password,
                password_confirmation: passwordConfirmation,
                address,
                phone,
                color1,
                color2,
                size,
            })
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

    return (
        <Container>
            <h1>Sign Up Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        id="email" 
                        type="email" 
                        placeholder="Enter email" 
                        autoComplete="off"  
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        id="username" 
                        type="text" 
                        placeholder="Enter username" 
                        autoComplete="off"
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        id="password" 
                        type="password" 
                        placeholder="Password" 
                        autoComplete="current-password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control 
                        id="password_confirmation" 
                        type="password" 
                        placeholder="Confirm Password" 
                        autoComplete="current-password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control 
                        id="address" 
                        type="text" 
                        placeholder="Address" 
                        autoComplete="off" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control 
                        id="phone" 
                        type="text" 
                        placeholder="Phone" 
                        autoComplete="off" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Row className="justify-content-md-center">
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="exampleColorInput">Primary Site Color</Form.Label>
                            <Form.Control
                                type="color"
                                id="exampleColorInput"
                                defaultValue="#563d7c"
                                title="Choose your color"
                                autoComplete="off" 
                                value={color1}
                                onChange={(e) => setColor1(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="exampleColorInput">Secondary Site Color </Form.Label>
                            <Form.Control
                                type="color"
                                id="exampleColorInput"
                                defaultValue="#563d7c"
                                title="Choose your color"
                                autoComplete="off" 
                                value={color2}
                                onChange={(e) => setColor2(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                    <br/>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                Shoe Size
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>4.5W </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>5W </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>5.5W </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>6W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>6.5W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>7W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>7.5W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>8W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>8.5W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>7.5M / 9W </Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>8M   / 9.5W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>8.5M / 10W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>9M   / 10.5W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>9.5M / 11W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>10M / 11.5W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>10.5M / 12W</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>11M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>11.5M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>12M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>12.5M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>13M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>13.5M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>14M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>15M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>16M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>17M</Dropdown.Item>
                                <Dropdown.Item onClick={(e) => setShoeSize(e.target.value)}>18M</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <br/>
                <Button variant="dark" type="submit">{isLoading ? "Loading..." : "Login"}</Button>
                {errors.map(error => (
                    <Alert className="mt-3" variant="danger" key={error}>{error}</Alert>
                ))}
            </Form>
        </Container>
    )
}

export default SignUpForm;