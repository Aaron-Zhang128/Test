// Home.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import customLogo from "../assets/custom-logo.svg"; // Update this path to your actual logo's path
import CustomType from "./CustomType"; // Assuming we have recreated Type.js as CustomType.js

// Assuming CustomParticle.js is similar to Particle component, you may need to create or integrate it as well.
import CustomParticle from "./CustomParticle"; 

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <CustomParticle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome! <span className="wave" role="img" aria-label="wave">👋</span>
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Custom Project Name </strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <CustomType />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={customLogo} alt="home-pic" className="img-fluid" style={{ maxHeight: "450px" }} />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;