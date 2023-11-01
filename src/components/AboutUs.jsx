import React from "react";
import "../styles/AboutUs.css";
import ProfileCard from "./ProfileCard";
import Garvit from "../assets/Profile1.jpg";
import Harsh from "../assets/Pandu2.png";
import CPsir from "../assets/CP_Sir.jpg";
import Anirudh from "../assets/Anirudh2.png";

const AboutUs = ({ about }) => {
  const ProfileData = [
    {
      name: "Garvit Prasad",
      Info: "",
      Img: "Garvit",
      ImgTag: Garvit,
      link: "https://www.linkedin.com/in/garvit-prasad-9a351620a/",
    },
    {
      name: "Harsh Pandey",
      Info: "",
      Img: "Harsh",
      ImgTag: Harsh,
      link: "https://www.linkedin.com/in/harsh-pandey-830148211/",
    },
    {
      name: "Anirudh Yadav",
      Info: "",
      Img: "Anirudh",
      ImgTag: Anirudh,
      link: "https://www.linkedin.com/in/anirudh-yadav-583825202/",
    },
  ];
  const MentorProfile = {
    name: "Mr. Chandra Prakash Singar",
    Info: "",
    Img: "Chandra Prakash",
    ImgTag: CPsir,
    link: "https://www.sgsits.ac.in/index.php/it-faculty-members/411-mr-chandra-prakash-singar",
  };
  return (
    <div ref={about} className="About-Us-Main-Div">
      <p className="Main-Heading">
        <center>About Us</center>
      </p>
      <p className="Secondary-Heading">We are a team of expert programmers</p>
      <p className="Paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum
        asperiores minima nemo facilis accusantium quod. Voluptatibus, provident
        quam possimus distinctio tempora ab suscipit corrupti consequatur
        placeat deserunt numquam, nostrum nobis. Consequatur exercitationem
        voluptatibus iste vitae mollitia, illo laboriosam
      </p>
      <br></br>
      <div className="Profile-Card-Div">
        {ProfileData.map((user) => (
          <div>{<ProfileCard props={user} />}</div>
        ))}
      </div>
      <br></br>
      <p className="Secondary-Heading">Mentored By</p>
      <ProfileCard props={MentorProfile} />
    </div>
  );
};

export default AboutUs;
