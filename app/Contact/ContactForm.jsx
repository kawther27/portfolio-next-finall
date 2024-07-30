
"use client";

import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import '../../styles/Contact.css'; 

const ContactForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Control type="text" placeholder="Name" required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Control type="email" placeholder="Email" required />
        </Form.Group>

        <Form.Group controlId="formSubject">
          <Form.Control type="text" placeholder="Subject" required />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Control as="textarea" rows={3} placeholder="Message" required />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100 mt-3">
          Send Message
        </Button>
      </Form>
               {/* pop up message  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Received</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for contacting us. Your message has been successfully received.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactForm;
