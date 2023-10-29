import React from "react";
import "../styles/NistPage.css";
import { Card, Button, Accordion } from "react-bootstrap";
import NIST from "../assets/NIST.png";
import Algo from "../assets/FourAlgo.png";

function NistPage() {
  const redirectToNist = () => {
    window.location.href = "https://www.nist.gov/";
  };
  return (
    <div className="Introduction-Main-Div">
      <div className="Nist-Main-Div">
        <Card className="Nist-Card-Main-Div">
          <Card.Img variant="top" src={NIST} />
        </Card>
        <Card className="Nist-Card-Main-Div">
          <Card.Body>
            <Card.Title>NIST</Card.Title>
            <Card.Text className="Nist-Para">
              The National Institute of Standards and Technology (NIST) is an
              agency of the United States Department of Commerce whose mission
              is to promote American innovation and industrial competitiveness.
              NIST's activities are organized into physical science laboratory
              programs that include nanoscale science and technology,
              engineering, information technology, neutron research, material
              measurement, and physical measurement. From 1901 to 1988, the
              agency was named the National Bureau of Standards
            </Card.Text>
            <Button onClick={redirectToNist} variant="primary">
              Check out Nist
            </Button>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <p className="Main-Heading">
        <center>Algorithim</center>
      </p>
      <p className="Secondary-Heading">
        4 Post quantum cryptography algorithim
      </p>
      <div className="Four-Card-Main-Div" style={{ width: "76rem" }}>
        <img src={Algo}></img>
      </div>
      <br></br>
    </div>
  );
}

export default NistPage;
