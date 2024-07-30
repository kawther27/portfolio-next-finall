"use client";

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Layout from '../components/Layout';
import '../../styles/Projects.css'; // On utilise le style Testimonials ici

const ProjectsClient = () => {
  const projects = [
    {
      id: 1,
      title: "Porject 1",
      description: "Description for project 1. This project is a comprehensive solution designed to streamline the cultivation, tracking, and management of cannabis plants from seedling to harvest. Utilizing the powerful .NET MAUI framework, this application supports both desktop and mobile platforms, ensuring seamless accessibility and management for users. Key features include comprehensive CRUD operations for managing plant varieties, stages of life, storage locations, provenance, and user roles. The system also offers robust logging and note-taking capabilities to track plant health, modifications, and historical data, providing an all-encompassing tool for efficient cannabis cultivation management.",
      img: "/images/App-ges-demande.jpeg",
      link: "https://github.com/seifallah12345/livrable1",
    },
    {
      id: 2,
      title: "Calculator",
      description: "Description for project 2. This project involves the development of a sophisticated calculator application. The application supports a wide range of mathematical operations, including basic arithmetic, scientific calculations, and complex number manipulations. Built with a user-friendly interface, this project aims to provide a seamless user experience with features such as history tracking, memory functions, and customizable themes.",
      img: "/images/calculator.jpeg",
      link: "https://github.com/kawther27/project2",
    },
    {
      id: 3,
      title: "Cannabis Plant Management System",
      description: "The Cannabis Plant Management System is an integrated solution designed to streamline the cultivation, tracking, and management of cannabis plants from seedling to harvest. Utilizing the powerful .NET MAUI framework, this application supports both desktop and mobile platforms, ensuring seamless accessibility and management for users. Key features include comprehensive CRUD operations for managing plant varieties, stages of life, storage locations, provenance, and user roles. The system also offers robust logging and note-taking capabilities to track plant health, modifications, and historical data, providing an all-encompassing tool for efficient cannabis cultivation management.",
      img: "/images/cannabis.jpg",
      link: "https://github.com/Isigod024/Cannabius",
    },
  ];

  return (
    <Layout>
      <section id="projects" className="testimonials-section"> {/* Changement de classe */}
        <Container>
          <h2 className="text-center mb-4">Projects</h2> {/* Changement de titre */}
          <Row>
            {projects.map((project) => (
              <Col md={4} key={project.id} className="mb-4">
                <Card className="h-100">
                  <Image src={project.img} alt={project.title} className="card-img-top" layout="responsive" width={500} height={500} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                      View on GitHub
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default ProjectsClient;
