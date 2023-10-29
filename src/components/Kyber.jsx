import React from "react";
import "../styles/Kyber.css";

const Kyber = ({ kyber }) => {
  return (
    <div ref={kyber} className="Introduction-Main-Div">
      <p className="Main-Heading">
        <center>1. KYBER</center>
      </p>
      <p className="Secondary-Heading">Lattice Based Algorithim</p>
      <p className="Paragraph">
        Kyber is an IND-CCA2-secure key encapsulation mechanism (KEM), whose
        security is based on the hardness of solving the learning-with-errors
        (LWE) problem over module lattices. Kyber is one of the finalists in the
        NIST post-quantum cryptography project. The submission lists three
        different parameter sets aiming at different security levels.
        Specifically, Kyber-512 aims at security roughly equivalent to AES-128,
        Kyber-768 aims at security roughly equivalent to AES-192, and Kyber-1024
        aims at security roughly equivalent to AES-256.
      </p>
      <p className="Secondary-Heading">Mini kyber explanation</p>
      <p className="Paragraph">
        It is a cryptographic design that uses the arithmetic Ive described
        above. It's a public key cryptography design which means you can tell
        lots of people how to encrypt messages to you that only you can decrypt.
        I've tried to keep mini-Kyber small, so only a few messages can be sent,
        but one message can be encrypted lots of different ways, which is good
        for cryptography. Our messages will be four numbers, but these numbers
        can only be 0 or -15. For example, someone might send the message
        [−15,−15,0,−15] . Before anyone can do any encrypting, I have to stop
        and choose some secret numbers which I'll call the private key and some
        numbers that I can tell everyone, which I'll call the public key.
      </p>
      <p className="Secondary-Heading-Two">Making keys</p>
      <p className="Paragraph">
        Firstly, I'm going to choose four lists of numbers that I'll share with
        everyone. I'm going to write them in a 2x2 table or "matrix", for
        example I might choose the numbers
      </p>
      <p className="Paragraph-Algo">
        [[13,13,−12,3][−1,10,−5,−8][−8,6,−9,8][0,−7,−14,7]].
      </p>
      <p className="Paragraph">
        Next, I'm going to choose some secret lists of numbers. The numbers in
        these lists will all be -1, 0 or 1. I'm going to choose two pairs of
        lists and write them both a 1x2 tables or matrices. I'll call the first
        one the signal secret and the second one the noise secret. For example I
        might choose the lists
      </p>
      <p className="Paragraph-Algo">[[0,0,1,0][0,1,1,−1]]</p>
      <p className="Secondary-Heading-Two">Signal secret</p>
      <p className="Paragraph-Algo">[[−1,1,−1,−1][1,0,−1,1]]</p>
      <p className="Secondary-Heading-Two">Noise secret</p>
      <p className="Paragraph">
        Lastly, I'm going to create a public pair of lists. I'm going to make
        the first list of my public pair by multiplying the first list in my 2x2
        table by the first list in the signal secret, multiplying the second
        list in my 2x2 table by the second list in the signal secret, adding
        these together and also adding the first number from the noise secret.
        So in our example the first public list is
      </p>
      <p className="Paragraph-Algo">
        [13,13,−12,3]×[0,0,1,0]+[−8,6,−9,8]×[0,1,1,−1]+[−1,1,−1,−1]
      </p>
      <p className="Paragraph-Algo">
        = [12,−3,13,13]+[7,6,6,5]+[−1,1,−1,−1]=[−13,4,−13,−14].
      </p>
      <p className="Paragraph">
        I'll make the second public list of my public pair by multiplying the
        third list in my 2x2 table by the first list in the signal secret,
        multiplying the fourth list in my 2x2 table by the second list in the
        signal secret, adding these together and also adding the second number
        from the noise secret. So in our example the second public list is:
      </p>
      <p className="Paragraph-Algo">
        [−1,10,−5,−8]×[0,0,1,0]+[0,−7,−14,7]×[0,1,1,−1]+[1,0,−1,1]
      </p>
      <p className="Paragraph-Algo">
        = [5,8,−1,10]+[0,10,0,10]+[1,0,−1,1]=[6,−13,−2,−10].
      </p>
      <p className="Paragraph">
        Now that I've created keys, I'll keep the signal secret and the noise
        secret in a safe place where no-one can see them, but tell everyone
        about the 2x2 table of lists and the public pairs of lists.
      </p>
      <p className="Secondary-Heading">Encrypting a message</p>
      <p className="Paragraph">
        Encrypting a message starts very similar to creating a public pair of
        lists. The sender again chooses their own signal secret and noise
        secret, but we'll write these as 2x1 tables or matrices. For example,
        they might choose lists
      </p>
      <p className="Paragraph-Algo">[[0,1,−1,0][0,0,0,−1]]</p>
      <p className="Secondary-Heading-Two">Signal secret</p>
      <p className="Paragraph-Algo">[[−1,−1,0,−1][0,0,1,0]]</p>
      <p className="Secondary-Heading-Two">Noise secret</p>
      <p className="Paragraph">
        As before, they multiply lists in the table by lists in their signal and
        add these together as well as their noise secret to get two lists. This
        time however well multiply the first list in our signal secret by the
        first in the table and the second list in our signal secret by the third
        in our table and then add the first list in our noise secret:
      </p>
      <p className="Paragraph-Algo">
        [0,1,−1,0]×[13,13,−12,3]+[0,0,0,−1]×[−1,10,−5,−8]+[−1,−1,0,−1]
      </p>
      <p className="Paragraph-Algo">= [−6,10,−8,6]</p>
      <p className="Paragraph">
        and then multiply the first list in our signal secret by the second in
        the table and the second list in our signal secret by the fourth in our
        table and then add the second list in our noise secret: noise secret:
      </p>
      <p className="Paragraph-Algo">
        [0,1,−1,0]×[−8,6,−9,8]+[0,0,0,−1]×[0,−7,−14,7]+[0,0,1,0]
      </p>
      <p className="Paragraph-Algo">= [7,−14,−9,−15].</p>
      <p className="Paragraph">
        Now the sender multiplies the first list in their signal secret by the
        first list in the public pair and the second list in their signal secret
        by the second list in the public pair; they add these together and also
        add the message:
      </p>
      <p className="Paragraph-Algo">
        [0,1,−1,0]×[−13,4,−13,−14]+[0,0,0,−1]×[6,−13,−2,−11]+[−15,−15,0,−15]
      </p>
      <p className="Paragraph-Algo">= [4,−13,6,−7].</p>
      <p className="Paragraph">
        The sender then passes me the three lists that they have made.
      </p>
      <p className="Secondary-Heading">Decrypting the message</p>
      <p className="Paragraph">
        When I receive these three lists, I take the first list, multiply it by
        the first list in my signal secret, I take the second list, multiply it
        by the second list in my signal secret and then subtract both of these
        from the third list:
      </p>
      <p className="Paragraph-Algo">
        [4,−13,6,−7]−[−6,10,−8,6]×[0,0,1,0]−[7,−14,−9,−15]×[0,1,1,−1]
      </p>
      <p className="Paragraph-Algo">= [−14,11,3,13].</p>
      <p className="Paragraph">
        I then look at each of the numbers in this list and decide if they're
        "big" (less than -7 or greater than 7) or "small" (between -7 and 7)
        I'll change "big" numbers to -15 and "small" numbers to 0:
      </p>
      <p className="Paragraph-Algo">[−14,11,3,13]→[−15,−15,0,−15]</p>
      <p className="Paragraph">and I've correctly received the message!.</p>
    </div>
  );
};

export default Kyber;
