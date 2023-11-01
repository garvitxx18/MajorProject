import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import generate_key from "../LibraryCode/generate_key.js";
import encrypt from "../LibraryCode/encrypt.js";
import decrypt from "../LibraryCode/decrypt.js";
import CodeBox from "./CodeBox.jsx";

const KyberCode = () => {
  console.log(generate_key);
  return (
    <div className="Introduction-Main-Div">
      <p className="Main-Heading">
        <center>Implementation of Kyber</center>
      </p>
      <p className="Secondary-Heading">Let's try it out</p>
      <CodeBox />
      <p className="Secondary-Heading">Key Generation</p>
      <p className="Paragraph">
        The private key of a Kyber key pair consists of a vector of "small"
        polynomials. These polynomials have small coefficients, which means that
        they are typically chosen from a small range of integers. To generate
        these polynomials, random coefficients are used using the Crypto
        library. On the other hand, the public key of a Kyber key pair consists
        of two elements: A matrix of random polynomials A and a vector of
        polynomials t.
      </p>
      <p className="Paragraph">
        The matrix A is generated by randomly choosing coefficients and taking
        them modulo q, where q is a prime number. The goal of choosing q is to
        ensure that the coefficients of the polynomials in A remain small. To
        calculate the vector t, an additional error vector e is needed. Like the
        private key polynomials, the error vector e also consists of polynomials
        with small coefficients. The vector t is then calculated as the product
        of the matrix A and the private key vector s, plus the error vector e: t
        = As + e In other words, the vector t is obtained by multiplying the
        matrix A with the private key vector s, and then adding the error vector
        e. The resulting vector t is then used as the public key for the Kyber
        key pair
      </p>
      <br></br>
      <SyntaxHighlighter
        language="python"
        style={atomDark}
        customStyle={{
          padding: "25px",
          width: "50%",
        }}
        wrapLongLines={true}
        showLineNumbers={true}
      >
        {generate_key.create_key}
      </SyntaxHighlighter>
      <br></br>
      <p className="Secondary-Heading">Encryption</p>
      <p className="Paragraph">
        To encrypt a message using Kyber, we first need to turn it into a
        polynomial. This is done by using the bits of the message as the
        coefficients of the polynomial. For example, if the message is "1101",
        then the corresponding polynomial would be 1x^3 + 1x^2 + 0x^1 + 1x^0.
      </p>
      <p className="Paragraph">
        Before encrypting the polynomial, we need to scale it. This is done by
        multiplying it with the floor of q/2, where q is the prime number used
        to generate the public key matrix A. The reason for this scaling is to
        ensure that the coefficients of the resulting ciphertext polynomial are
        also small
      </p>
      <SyntaxHighlighter
        language="python"
        style={atomDark}
        customStyle={{
          padding: "25px",
          width: "50%",
        }}
        wrapLongLines={true}
        showLineNumbers={true}
      >
        {encrypt.encrypt}
      </SyntaxHighlighter>
      <br></br>
      <p className="Secondary-Heading">Decryption</p>
      <p className="Paragraph">
        To decrypt a ciphertext (u, v) using Kyber, we first use the private key
        s to compute a noisy polynomial result mn = u · s + v The noisy result
        mn is not the original message polynomial mb, but a noisy version of it
        due to the presence of the error terms in the ciphertext. To recover the
        original message polynomial mb from mn, we need to round the
        coefficients of mn to the nearest multiple of q/p, where p is a
        parameter used to control the noise level in the ciphertext. Once we
        have the rounded polynomial, which is the scaled polynomial that we
        encrypted, we can recover the original binary polynomial mb by scaling
        down with factor 1/2.
      </p>
      <SyntaxHighlighter
        language="python"
        style={atomDark}
        customStyle={{
          padding: "25px",
          width: "50%",
        }}
        wrapLongLines={true}
        showLineNumbers={true}
      >
        {decrypt.decrypt}
      </SyntaxHighlighter>
    </div>
  );
};

export default KyberCode;
