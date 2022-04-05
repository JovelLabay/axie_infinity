import React, { useState } from "react";
import axios from "axios";

import { Modal, Button, Form } from "react-bootstrap";

export default function CreateAdminModal(props) {
  const { show, handleClose } = props;

  // HANDLING SUBMISSION
  const [status, setStatus] = useState("Create New");
  let btnStatus = "";
  if (status === "Create New") {
    btnStatus += "primary";
  } else if (status === "Creating") {
    btnStatus += "info";
  } else if (status === "Created") {
    btnStatus += "success";
  } else {
    btnStatus += "danger";
  }

  // USERNAME & PASSWORD
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // COUNTING THE PASSWORD
  let passwordCount = "";
  const passCount = password.split("").length;
  if (passCount === 0) {
    passwordCount += "";
  } else if (passCount <= 6) {
    passwordCount += "Too short";
  }

  // SIGNIN
  let usernamePassword = JSON.stringify({
    username,
    password,
  });
  const signin = (e) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: "/signin-admin",
      headers: {
        "Content-Type": "application/json",
      },
      data: usernamePassword,
    };
    setStatus("Creating");

    axios(config)
      .then((response) => {
        const responseData = response.data;
        if (responseData === "Account Successfully Created") {
          setStatus("Created");
          setUsername("");
          setPassword("");
          setTimeout(() => {
            setStatus("Create New");
          }, 3000);
        } else if (responseData === "Cannot use the sane username for admin") {
          alert(responseData);
          setStatus("Try again");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* CREATE NEW ADMIN FORM */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new username"
                value={username}
                autoComplete="on"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password:{" "}
                <span className="text-red-500 font-medium">
                  {passwordCount}
                </span>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant={btnStatus} type="submit" onClick={signin}>
              {status}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
