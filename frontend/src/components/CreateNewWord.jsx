import React, { useState } from "react";
import axios from "axios";

import { Modal, Button, Form } from "react-bootstrap";

export default function CreateNewWord(props2) {
  const { show2, handleClose2 } = props2;

  // PROHIBITED WORD
  const [word, setWord] = useState("");

  // SIGNIN
  let newWord = JSON.stringify({
    words: word,
  });
  const createWord = (e) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: "/add-words",
      headers: {
        "Content-Type": "application/json",
      },
      data: newWord,
    };

    axios(config)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Prohibited Word</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* CREATE NEW ADMIN FORM */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Prohibited Word:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter new prohibited word"
                value={word}
                autoComplete="on"
                onChange={(e) => setWord(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" onClick={createWord}>
              Create Prohibited word
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
