import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/user.js";
import { Button } from 'react-bootstrap'

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button variant="dark"
        onClick={() => {
          dispatch(login({ name: "Ilolo", age: 24, email: "iloloizu97@gmail.com" }));
        }}
      >
        Login
      </Button>

      <Button variant="dark"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </div>
  );
}

export default Login;