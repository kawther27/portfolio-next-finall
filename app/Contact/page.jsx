
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Layout from '../components/Layout';
import ContactForm from './ContactForm';
import '../../styles/Contact.css';  

const Contact = () => {
  return (
    <Layout>
      <section id="contact" className="contact-section">
        <Container>
          <h2 className="text-center mb-4">Contact Me</h2>
          <Row className="contact-info text-center">
            <Col md={4}>
              <div className="contact-item">
                <Image src="/images/location.png" alt="Location" width={40} height={40} className="contact-icon" />
                <h4>My Location:</h4>
                <p>71 rue brady Gatineau, QC</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <Image src="/images/phone.png" alt="Phone" width={40} height={40} className="contact-icon" />
                <h4>Phone Number:</h4>
                <p>(+1) 514 233 4859</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="contact-item">
                <Image src="/images/email.png" alt="Email" width={40} height={40} className="contact-icon" />
                <h4>Email Address:</h4>
                <p>kawtherkhlif20@gmail.com<br /> 2711419@collegelacite.com</p>
              </div>
            </Col>
          </Row>
          <Row className="contact-form-map">
            <Col md={7}>
              <ContactForm />
            </Col>
            <Col md={5}>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.7759821876934!2d-75.719694384443!3d45.46980597910185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0505e940bb45%3A0x9d6bb6be9f3f9157!2s71%20Rue%20Brady%2C%20Gatineau%2C%20QC%20J8Y%202C1%2C%20Canada!5e0!3m2!1sen!2sus!4v1624484567358!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
