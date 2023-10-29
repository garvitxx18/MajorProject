import React from "react";
import "../styles/Sphincs.css";

const Sphincs = ({ sphincs }) => {
  return (
    <div ref={sphincs} className="Introduction-Main-Div">
      <p className="Main-Heading">
        <center>4. Sphincs+</center>
      </p>
      <p className="Secondary-Heading">Lattice Based Algorithim</p>
      <p className="Paragraph">
        SPHINCS+ is a digital signature algorithm that is designed to provide
        strong security while being practical for real-world use. It is a
        post-quantum signature scheme, which means it is designed to be secure
        against attacks from both classical and quantum computers.
      </p>
      <p className="Paragraph">
        The SPHINCS+ algorithm is based on a tree-based structure, which allows
        for a compact signature size and fast signing and verification times. It
        uses a hash-based construction, which means that it relies on
        cryptographic hash functions to generate signatures.
      </p>
      <p className="Paragraph">
        One of the key features of SPHINCS+ is its ability to resist a type of
        attack called a forgery attack. A forgery attack is when an attacker is
        able to generate a fake signature that is accepted as genuine by the
        system. SPHINCS+ is designed to prevent this type of attack by using a
        stateful hash-based signature scheme, which means that the signature
        depends on the state of the hash function at the time it was generated.
      </p>
      <p className="Paragraph">
        The security of SPHINCS+ is based on the hardness of certain
        mathematical problems related to hash functions. Specifically, it is
        based on the assumption that it is difficult to find two messages that
        have the same hash value. This assumption is known as the collision
        resistance property of cryptographic hash functions.
      </p>
      <p className="Paragraph">
        SPHINCS+ is designed to be practical for real-world use, with a small
        signature size and fast signing and verification times. It is being
        considered as a potential replacement for current digital signature
        algorithms that are based on mathematical problems that may be
        vulnerable to attacks from quantum computers.
      </p>
      <br></br>
    </div>
  );
};

export default Sphincs;
