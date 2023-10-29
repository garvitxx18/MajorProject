import React from "react";
import "../styles/Introduction.css";

const Introduction = () => {
  return (
    <div className="Introduction-Main-Div">
      <p className="Main-Heading">
        <center>Introduction</center>
      </p>
      <p className="Secondary-Heading">Post quantum cryptography</p>
      <p className="Paragraph">
        Post-quantum cryptography (PQC) is a rapidly evolving subfield of
        cryptography that aims to develop cryptographic algorithms that can
        withstand attacks from quantum computers. Conventional cryptographic
        techniques, such as RSA and elliptic curve cryptography, may be
        vulnerable to quantum computer attacks as the field of quantum computing
        progresses. Therefore, PQC is crucial to ensure the security of digital
        transactions and communications. PQC focuses on designing cryptographic
        algorithms that can provide security against both classical and quantum
        computers.
      </p>
      <p className="Paragraph">
        These algorithms often rely on mathematical problems that are believed
        to be hard even for quantum computers. The most common problems used in
        PQC include lattice-based cryptography, code-based encryption,
        hash-based cryptography, and the shortest vector problem. The
        development of PQC algorithms requires a deep understanding of both
        classical and quantum algorithms, as well as their limitations and
        strengths. PQC research involves the design, analysis, and
        implementation of new cryptographic protocols and algorithms that are
        resistant to attacks from quantum computers. This requires a
        multidisciplinary approach that encompasses mathematics, computer
        science, physics, and engineering
      </p>
      <br></br>
      <p className="Secondary-Heading">
        Challenges present in current encryption algorithim
      </p>
      <p className="Paragraph">
        The security of many widely used cryptographic algorithms is based on
        the difficulty of certain mathematical problems that can be efficiently
        solved by quantum computers. For example, the widely used RSA and
        elliptic curve cryptography (ECC) are vulnerable to attacks by a quantum
        computer
      </p>
      <p className="Paragraph">
        Quantum computers are based on quantum mechanical principles and use
        quantum bits (qubits) to perform certain calculations exponentially
        faster than classical computers. Shor's algorithm, a quantum algorithm,
        can efficiently factor large numbers, which is the basis of RSA
        cryptography, and solve the discrete logarithm problem, which is the
        basis of ECC. This means that a quantum computer would be able to break
        these cryptographic algorithms with ease.
      </p>
      <p className="Paragraph">
        Post-quantum cryptography aims to develop new cryptographic algorithms
        that are resistant to attacks by quantum computers. These algorithms are
        based on mathematical problems that are believed to be hard even for
        quantum computers. For example, lattice-based cryptography, code-based
        cryptography, and multivariate cryptography are all post-quantum
        cryptographic systems that are believed to be secure against quantum
        attacks.
      </p>
    </div>
  );
};

export default Introduction;
