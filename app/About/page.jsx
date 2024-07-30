import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import '../../styles/About.css';
import Layout from '../components/Layout';
import profilePhoto from '../../public/images/photoProfile.jpg';

function About() {
  return (
    <Layout>
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4}  className="d-flex justify-content-center">
          <Image 
                src={profilePhoto} 
                alt="Profile" 
                style={{ borderRadius: '15px',
                border: '2px solid #d6bd97',
                padding: '5px' }} 
                className="img-fluid profile-photo" 
                width={300}
                height={300}
              />
          </Col>
          <Col md={8}>
            <div className="about-text">
              <h2>About Me</h2>
              <h3>Hi There! I'm <span className='name'>Kawther</span> </h3> 
              <p className="lead">
               I'm a dedicated Computer Science student with 
               a passion for developing fun and intuitive 
               applications. I strive to create seamless
               user experiences through innovative interface design. 
               I hold a diploma in Mechatronics and have a deep interest 
               in mechanics and cars.I LOVE MINIMAL
               AND BRUTALIST DESIGN
               Beyond tech, I enjoy exploring fashion, art, and diverse
               cultures through travel and culinary adventures</p>
              <Button variant="warning" href="/cv/cv.pdf" download className="download-cv">Download CV</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </Layout>
  );
}

export default About;
