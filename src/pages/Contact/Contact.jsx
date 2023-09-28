import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setIsSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Name is required";
    }
    if (!data.phone) {
      errors.phone = "Phone is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  return (
    <Container className="p-5">
      <h1 className="fw-bold">Contact Us</h1>
      <p className="contact">
        Thank you for your interest in Urban Haven Real Estate. We are dedicated
        to assisting you with all your real estate requirements, whether you're
        interested in buying, selling, or renting a property. Please feel free
        to reach out to us with any questions or inquiries you may have.
      </p>
      <Row>
        <Col md={6}>
          <div className="box-container mt-3 p-4">
            {isSubmitted ? (
              <div className="alert alert-success mt-3">
                Thank you for your submission!
              </div>
            ) : (
              <Form onSubmit={handleSubmit} className="mt-4">
                <Row>
                  <Col>
                    <Form.Group controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        isInvalid={!!errors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" variant="success">
                  Submit
                </Button>
              </Form>
            )}
          </div>
        </Col>
        <Col md={6}>
          <div className="text-end box-container2 mt-5 p-4">
            <h3 className="fw-semibold mb-5">Get in Touch with Us</h3>
            <p className="text-dark mt-5">+971 585768009</p>
            <p className="text-dark">urbanhaven@gmail.com</p>
            <p className="text-dark fw-bold">Head Office</p>
            <p className="text-dark">UAE, Dubai, United Arab Emirates</p>
            <p className="text-dark fw-bold">Office Hours:</p>
            <p className="text-dark mb-5">Monday – Friday, 9:00 am – 5:00 pm</p>
          </div>
        </Col>
      </Row>
      <h5 className="mt-5 text-center">
        We appreciate your interest and look forward to helping you find your
        Urban Haven.
      </h5>
    </Container>
  );
};

export default ContactForm;
