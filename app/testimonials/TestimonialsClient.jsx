"use client";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTestimonial, updateTestimonial } from '../../store/actions/testimonialActions';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from '../components/Layout';
import ProtectedRouteClient from '../components/ProtectedRouteClient';
import '../../styles/Testimonials.css';

const TestimonialsClient = () => {
  const testimonials = useSelector(state => state.testimonials.testimonials);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState({
    id: null,
    name: '',
    title: '',
    quote: '',
  });

  const handleAddTestimonial = () => {
    setCurrentTestimonial({
      id: Date.now(),
      name: '',
      title: '',
      quote: '',
    });
    setShowModal(true);
  };

  const handleEditTestimonial = (testimonial) => {
    setCurrentTestimonial(testimonial);
    setShowModal(true);
  };

  const handleSaveTestimonial = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      if (currentTestimonial.id) {
        dispatch(updateTestimonial(currentTestimonial));
      } else {
        dispatch(addTestimonial(currentTestimonial));
      }
      setShowModal(false);
    }
    setValidated(true);
  };

  return (
    <ProtectedRouteClient>
      <Layout>
        <section id="testimonials" className="projects-section">
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary" onClick={handleAddTestimonial}>
              Add Testimonial
            </button>
          </div>
          <div className="carousel-container">
            <Carousel>
              {testimonials.map(testimonial => (
                <Carousel.Item key={testimonial.id}>
                  <div className="carousel-content">
                    <Carousel.Caption>
                      <div className="description">
                        <h4 className='client-name'>{testimonial.name}</h4>
                        <p>{testimonial.quote}</p>
                        <button className="btn btn-secondary" onClick={() => handleEditTestimonial(testimonial)}>Edit</button>
                      </div>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>{currentTestimonial.id ? 'Edit Testimonial' : 'Add Testimonial'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form noValidate validated={validated} onSubmit={handleSaveTestimonial}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter name"
                    value={currentTestimonial.name}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter title"
                    value={currentTestimonial.title}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, title: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a title.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formQuote">
                  <Form.Label>Quote</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={3}
                    placeholder="Enter quote"
                    value={currentTestimonial.quote}
                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, quote: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a quote.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
              <Button variant="primary" onClick={handleSaveTestimonial}>Save changes</Button>
            </Modal.Footer>
          </Modal>
        </section>
      </Layout>
    </ProtectedRouteClient>
  );
};

export default TestimonialsClient;
