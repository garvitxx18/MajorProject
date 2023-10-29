import React from "react";
import { Card, Button } from "react-bootstrap";
import "../styles/ProfileCard.css";
import Garvit from "../assets/Profile1.jpg";
import Harsh from "../assets/HarshPandey.jpg";
import CPsir from "../assets/CP_Sir.jpg";

const ProfileCard = (props) => {
  console.log(props.props.Img);
  let Image = props.props.Img;
  console.log(Image);
  return (
    <Card style={{ width: "18rem", height: "35rem" }}>
      <Card.Img variant="top" src={props.props.ImgTag} />
      <Card.Body>
        <Card.Title>{props.props.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">{"Meet " + props.props.Img}</Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
