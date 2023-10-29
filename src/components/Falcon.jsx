import React from "react";
import "../styles/Falcon.css";
import { Card } from "react-bootstrap";
import FalconArc from "../assets/FalconArchitecture.png";

const Falcon = ({ falcon }) => {
  return (
    <div ref={falcon} className="Introduction-Main-Div">
      <p className="Main-Heading">
        <center>2. Falcon</center>
      </p>
      <p className="Secondary-Heading">Lattice Based Algorithim</p>
      <p className="Paragraph">
        Falcon is a digital signature scheme that is designed to provide a high
        level of security against hacking attempts. It is based on a theoretical
        framework developed by Gentry, Peikert and Vaikuntanathan, which uses
        mathematical objects called lattices to provide security
      </p>
      <p className="Paragraph">
        Falcon is a digital signature scheme that is designed to provide a high
        level of security against hacking attempts. It is based on a theoretical
        framework developed by Gentry, Peikert and Vaikuntanathan, which uses
        mathematical objects called lattices to provide security
      </p>
      <p className="Secondary-Heading-Two">Falcon Architecture</p>
      <img className="Falcon-Architecture" src={FalconArc}></img>
      <br></br>
      <p className="Paragraph">
        Lattices are a type of mathematical structure that can be used to encode
        information. In the case of digital signatures, they are used to encode
        the information that is being signed. The security of the signature is
        based on the difficulty of certain mathematical problems related to
        lattices.
      </p>
      <p className="Paragraph">
        The specific type of lattice used in Falcon is called an NTRU lattice,
        which is named after the NTRU cryptosystem. The NTRU lattice is used
        because it has certain desirable properties that make it well-suited for
        use in digital signatures.
      </p>
      <p className="Paragraph">
        One of the key components of Falcon is the trapdoor sampler called "fast
        Fourier sampling". This is a tool that allows for the efficient
        generation of lattice points that are difficult to predict. This is
        important for security because it makes it difficult for hackers to
        reverse engineer the lattice and find a way to break the signature
      </p>
      <p className="Paragraph">
        One of the key components of Falcon is the trapdoor sampler called "fast
        Fourier sampling". This is a tool that allows for the efficient
        generation of lattice points that are difficult to predict. This is
        important for security because it makes it difficult for hackers to
        reverse engineer the lattice and find a way to break the signature
      </p>
      <p className="Paragraph">
        The SIS problem is currently impossible to solve efficiently, even with
        the help of quantum computers. This means that Falcon is considered to
        be a highly secure digital signature scheme.
      </p>
    </div>
  );
};

export default Falcon;
