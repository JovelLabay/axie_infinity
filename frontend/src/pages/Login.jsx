import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// REACT BOOTSTRAP
import { Form, Button } from "react-bootstrap";

// COMPONENTS
import { Logo, SemiBanner } from "../components/Banner";

export default function Login() {
  // LOGIN BUTTON STATUS
  const [loginBtn, setLoginBtn] = React.useState(false);

  // LOCATION
  const history = useHistory();

  // HANDLING SUBMISSION
  const [status, setStatus] = useState("Create New");

  // USERNAME & PASSWORD
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // SIGNIN
  let usernamePassword = JSON.stringify({
    username,
    password,
  });
  const login = (e) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: "http://localhost:8000/login-admin",
      headers: {
        "Content-Type": "application/json",
      },
      data: usernamePassword,
    };

    axios(config)
      .then((response) => {
        const { status, userStatus } = response.data;
        if (userStatus) {
          sessionStorage.setItem("token", userStatus);
          history.replace("/dashboard");
        } else {
          console.log(status);
          setLoginBtn(true);
          alert(`THIS IS ALPHA VERSION | ${status}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login">
      {/* SEMI BANNER */}
      <SemiBanner />
      {/* FORM */}
      <div className="login_form">
        <Logo />
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              isInvalid={loginBtn}
              type="text"
              placeholder="Enter username"
              value={username}
              autoComplete="on"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              isInvalid={loginBtn}
              type="password"
              placeholder="Enter password"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={login}>
              Login
            </Button>
          </div>
        </Form>
      </div>
      {/* NOTE */}
      <p className="text-amber-500 text-center">
        *Unauthorized personnel is not allowed
      </p>
    </div>
  );
}
