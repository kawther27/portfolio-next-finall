"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTestimonial, updateTestimonial } from '../../store/actions/testimonialActions';
import { Form, Button, Modal } from 'react-bootstrap';

const TestimonialForm = ({ testimonialToEdit, onClose }) => {
  const dispatch = useDispatch();
  const [testimonial, setTestimonial] = useState(
    testimonialToEdit || { name: '', title: '', quote: '', img: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTestimonial((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (testimonialToEdit) {
      dispatch(updateTestimonial(testimonialToEdit.id, testimonial));
    } else {
      dispatch(addTestimonial({ ...testimonial, id: Date.now() }));
    }
    onClose();
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{testimonialToEdit ? 'Edit Testimonial' : 'Add Testimonial'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={testimonial.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={testimonial.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formQuote">
            <Form.Label>Quote</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="quote"
              value={testimonial.quote}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formImg">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="img"
              value={testimonial.img}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            {testimonialToEdit ? 'Update' : 'Add'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TestimonialForm;
