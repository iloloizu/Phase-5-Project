import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ResetPasswordForm from './ResetPasswordForm';
import {Container, Button, Row, Col} from 'react-bootstrap';

function Login({ onLogin }){
    const [showResetForm, setShowResetForm] = useState(false)
    const [showLogin, setShowLogin] = useState(true);
    
    return (        
        <div className="wallpaper">
            
        <div className="glass">
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col>
                    { showLogin ? (
                        <>
                            <LoginForm onLogin={onLogin} />
                            <div>Don't have an account? &nbsp;
                                <Button variant="outline-light" onClick={() => setShowLogin(false)}>
                                    Sign Up
                                </Button>
                                <Button onClick={() => setShowResetForm(!showResetForm)} className="m-3" variant="outline-light"> {showResetForm?"Cancel Reset Password":"Reset Password"}</Button>
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
        </div>
        </div>
        

    )
}
export default Login;