import { useState, useRef } from "react";
// import "./App.css";
import { Button, Alert } from "react-bootstrap";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import CollegePage from "./components/CollegePage";
import Introduction from "./components/Introduction";
import ProjectPage from "./components/ProjectPage";
import NistPage from "./components/NistPage";
import Footer from "./components/Footer";
import Kyber from "./components/Kyber";
import Falcon from "./components/Falcon";
import Dilithium from "./components/Dilithium";
import Sphincs from "./components/Sphincs";
import KyberCode from "./components/KyberCode";
import Library from "./components/Library";

function App() {
  const kyber = useRef(null);
  const falcon = useRef(null);
  const dilithium = useRef(null);
  const sphincs = useRef(null);
  const about = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <>
      <NavBar
        kyber={kyber}
        falcon={falcon}
        dilithium={dilithium}
        sphincs={sphincs}
        about={about}
        scrollToSection={scrollToSection}
      />
      <Introduction />
      <ProjectPage />
      <NistPage />
      <Kyber kyber={kyber} />
      <KyberCode />
      <Library />
      <Falcon falcon={falcon} />
      <Dilithium dilithium={dilithium} />
      <Sphincs sphincs={sphincs} />
      <AboutUs about={about} />
      <Footer />
    </>
  );
}

export default App;
