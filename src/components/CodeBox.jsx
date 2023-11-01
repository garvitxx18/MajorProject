import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import "../styles/CodeBox.css";

const CodeBox = () => {
  const [privateKey, setPrivateKey] = useState("");
  const [message, setMessage] = useState("");
  const [publicKey, setPublicKey] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [flip, setFlip] = useState(false);

  async function encrypt(event) {
    event.preventDefault();
    const response = await fetch(
      "http://127.0.0.1:5000/api/encrypt?message=${message}",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data) {
      setPrivateKey(data.private_key);
      setPublicKey(data.public_key);
      setCipherText(data.cipher_text);
      setFlip(true);
    }
  }

  return (
    <div className="MainBox-CodeBox">
      <div className="codeBox">
        <InputGroup size="lg">
          <InputGroup.Text
            onClick={(e) => {
              setMessage(e.target.value);
            }}
            id="inputGroup-sizing-lg"
          >
            Message
          </InputGroup.Text>
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br></br>
        <Button onClick={encrypt} variant="primary" size="lg">
          Encrypt
        </Button>
        <br></br>
      </div>

      {flip && (
        <div className="dropDown--box">
          <center>
            <div className="headline--div">
              <h2>Here's Your </h2>
              <h2
                onClick={() => {
                  navigator.clipboard.writeText(cipherText);
                }}
                className="highlight--text"
              >
                Ciphertext
              </h2>
            </div>
            <br></br>
            <Alert variant="light">{cipherText}</Alert>
            <br></br>
            <div className="headline--div">
              <h2>Here's Your </h2>
              <h2
                className="highlight--text"
                onClick={() => {
                  navigator.clipboard.writeText(privateKey);
                }}
              >
                Private
              </h2>
              <h2>Key</h2>
            </div>
            <br></br>
            <Alert variant="light">{privateKey}</Alert>
            <br></br>
            <div className="headline--div">
              <h2>Here's Your </h2>
              <h2
                className="highlight--text"
                onClick={() => {
                  navigator.clipboard.writeText(publicKey);
                }}
              >
                Public
              </h2>
              <h2>Key</h2>
            </div>
            <br></br>
            <Alert variant="light">{publicKey}</Alert>
          </center>
        </div>
      )}
    </div>
  );
};

export default CodeBox;
