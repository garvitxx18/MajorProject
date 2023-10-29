import React from "react";
import "../styles/ProjectPage.css";

const ProjectPage = () => {
  return (
    <div className="Introduction-Main-Div">
      <p className="Main-Heading">
        <center>About the project</center>
      </p>
      <p className="Secondary-Heading">Objective of this project</p>
      <p className="Paragraph">
        The goal of this project is to implement the four post-quantum
        cryptography algorithms that have been standardised by the National
        Institute of Standards and Technology (NIST) and make them available
        through pip, the package installer for Python.
      </p>
      <p className="Paragraph">
        The implementation of these algorithms will be done in Python 3, with a
        focus on making the implementation easy to use and accessible to a wide
        range of users. The implementation will include the necessary
        cryptographic primitives, such as key generation, encryption, and
        decryption functions, as well as examples of how to use the algorithms.
      </p>
      <p className="Paragraph">
        The implementation will be tested against the reference implementations
        provided by NIST to ensure correctness and performance. The performance
        of the implementation will be evaluated in terms of key generation time,
        encryption and decryption time, and memory usage.
      </p>
      <p className="Paragraph">
        Once the implementation is complete, it will be made available through
        pip, making it easy for Python developers to integrate post-quantum
        cryptography into their applications. The project will be open source
        and hosted on a public repository such as GitHub, allowing for community
        contributions and improvements.
      </p>
      <br></br>
      <p className="Secondary-Heading">Scope of the project</p>
      <p className="Paragraph">
        The scope of this project is to implement the four post-quantum
        cryptography algorithms standardised by NIST in Python 3 and make them
        available through pip. The focus of the project is on making the
        implementation easy to use and accessible to a wide range of users
      </p>
      <p className="Paragraph">
        The project does not aim to create new post-quantum cryptography
        algorithms or to optimise the implementation for specific hardware or
        software platforms.
      </p>
      <br></br>
    </div>
  );
};

export default ProjectPage;
