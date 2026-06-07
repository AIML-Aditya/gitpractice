import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './css/GhostRider.module.css';

const Header = () => (
  <div className={styles.header}>
    <Container>
      <Row>
        <Col xs="12">
          <h1 className={styles.logo}>Ghost Rider aditya</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

const Footer = () => (
  <div className={styles.footer}>
    <Container>
      <Row>
        <Col xs="12" className={`text-center ${styles.copyright}`}>
          Copyright © 2023 
          GhostRider Landing Page!
        </Col>
      </Row>
    </Container>
  </div>
);

const Hero = () => (
  <div className={`${styles.hero} text-center`}>
    <h1>hello, Welcome to the official Ghost Rider landing page!</h1>
    <p>Stay tuned for more updates and information about our favorite Marvel superhero.</p>
  </div>
);

const LandingPage = () => (
  <div className={styles.app}>
    <Header />
    <Hero />
    <Footer />
  </div>
);

export default LandingPage;
