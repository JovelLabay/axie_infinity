import React from "react";

// UI LIBRARY
import { Button, Modal } from "react-bootstrap";

import logo from "../img/logo120.png";

export default function ViewWallet(prop2) {
  const {
    viewWallet,
    setViewWallet,
    nameWallet,
    recoveryPhraseWallet,
    discordIDWallet,
    deleteWallet,
  } = prop2;

  return (
    <Modal size="lg" show={viewWallet} onHide={setViewWallet}>
      <Modal.Header closeButton>
        <Modal.Title className="flex">
          <img src={logo} alt="Logo" height={50} width={50} className="pr-3" />
          {nameWallet} {"Wallet"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <span className="paragraphs">{"Discord ID: "}</span>
          {discordIDWallet}
        </p>
        <p>
          <span className="paragraphs">{"Wallet: "}</span>
          {nameWallet}
        </p>
        <p>
          <span className="paragraphs">{"Recovery Phrase: "}</span>

          {recoveryPhraseWallet}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button size="sm" variant="success" disabled>
          Edit
        </Button>
        <Button size="sm" variant="danger" onClick={deleteWallet}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
