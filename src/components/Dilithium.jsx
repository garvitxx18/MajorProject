import React from "react";
import "../styles/Dilithium.css";

const Dilithium = ({ dilithium }) => {
  return (
    <div ref={dilithium} className="Introduction-Main-Div">
      <p className="Main-Heading">
        <center>3. Dilithium</center>
      </p>
      <p className="Secondary-Heading">Lattice Based Algorithim</p>
      <p className="Paragraph">
        Dilithium is a digital signature scheme that provides a high level of
        security against hacking attempts, making it ideal for use in sensitive
        applications like cryptography and secure communications. The security
        of Dilithium is based on the hardness of lattice problems over module
        lattices. This means that an attacker with access to a signing oracle
        cannot produce a signature for a message that they have not yet seen,
        nor can they modify a signature for a message that they have already
        seen. In other words, the scheme is designed to prevent unauthorized
        access to sensitive information.
      </p>
      <p className="Paragraph">
        Dilithium is based on a technique called "Fiat-Shamir with Aborts" which
        uses rejection sampling to make lattice-based Fiat-Shamir schemes more
        compact and secure. This means that the scheme is designed to be both
        efficient and effective in protecting against hacking attempts. The
        smallest signature sizes are based on a scheme by Ducas, Durmus,
        Lepoint, and Lyubashevsky, which uses Gaussian sampling. However,
        Dilithium only uses uniform distribution to make it easier to implement
        securely and efficiently.
      </p>
      <p className="Paragraph">
        The use of Gaussian sampling in the Ducas-Durmus-Lepoint-Lyubashevsky
        scheme makes it more secure against attacks based on lattice reduction
        techniques. However, Gaussian sampling is difficult to implement
        securely and efficiently, which can make it less practical for use in
        real-world applications. To address this issue, Dilithium only uses
        uniform sampling. While this reduces the security against lattice
        reduction attacks, it still provides a high level of security against
        other types of attacks.
      </p>
      <p className="Paragraph">
        Dilithium improves on other uniform distribution schemes, such as that
        of Bai and Galbraith, by using a new technique that shrinks the public
        key by more than half. This makes Dilithium the most efficient
        lattice-based signature scheme that only uses uniformampling. The
        smaller public key size means that Dilithium is more practical for use
        in realworld applications, where efficiency and speed are often critical
        factors ampling. The smaller public key size means that Dilithium is
        more practical for use in realworld applications, where efficiency and
        speed are often critical factors
      </p>
    </div>
  );
};

export default Dilithium;
