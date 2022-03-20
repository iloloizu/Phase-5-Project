import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from './ResetPasswordForm';
import {Container, Button, Figure, Row, Col} from 'react-bootstrap';
import Three from "../Three";

const LoginImage = "https://wallpapercave.com/wp/wp4316804.jpg"

function Login({ onLogin }){
    const [showResetForm, setShowResetForm] = useState(false)
    const [showLogin, setShowLogin] = useState(true);

    return (        
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col>
                    <Figure>
                        <Three/>
                        {/* <Figure.Image width={600} alt="Sneaker Vault" src={LoginImage} /> */}
                    </Figure>
                </Col>
                <Col>
                    { showLogin ? (
                        <>
                            <LoginForm onLogin={onLogin} />
                            <div>Don't have an account? &nbsp;
                                <Button variant="outline-dark" onClick={() => setShowLogin(false)}>
                                    Sign Up
                                </Button>
                                <Button onClick={() => setShowResetForm(!showResetForm)} className="m-3" variant="outline-dark"> {showResetForm?"Cancel Reset Password":"Reset Password"}</Button>
                                {showResetForm ? <ResetPasswordForm setShowResetForm={setShowResetForm} /> : null}
                            </div>
                        </>
                    ): (
                        <>
                            <SignUpForm onLogin={onLogin} />
                            <p>
                                Already have an account? &nbsp;
                                <Button  className="m-3" variant="outline-dark" onClick={() => setShowLogin(true)}>
                                    Log In
                                </Button>
                            </p>
                        </>
                    )
                    }
                </Col>
            </Row>
        </Container>
    )
}
export default Login;