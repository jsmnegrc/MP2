import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./PropertyContact.css";

const ContactPage = () => {
  const [contactFormData, setContactFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [appointmentFormData, setAppointmentFormData] = useState({
    appointmentDate: "",
    appointmentMonth: "",
    appointmentYear: "",
    appointmentTime: "",
  });

  const [contactFormErrors, setContactFormErrors] = useState({});
  const [appointmentFormErrors, setAppointmentFormErrors] = useState({});

  const validateContactForm = () => {
    const errors = {};
    if (!contactFormData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!contactFormData.phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!contactFormData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(contactFormData.email)) {
      errors.email = "Invalid email format";
    }
    if (!contactFormData.message.trim()) {
      errors.message = "Message is required";
    }
    setContactFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateAppointmentForm = () => {
    const errors = {};
    if (!appointmentFormData.appointmentDate.trim()) {
      errors.appointmentDate = "Date is required";
    }
    if (!appointmentFormData.appointmentMonth.trim()) {
      errors.appointmentMonth = "Month is required";
    }
    if (!appointmentFormData.appointmentYear.trim()) {
      errors.appointmentYear = "Year is required";
    }
    if (!appointmentFormData.appointmentTime.trim()) {
      errors.appointmentTime = "Time is required";
    }
    setAppointmentFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitContactForm = (e) => {
    e.preventDefault();
    if (validateContactForm()) {
      // Handle submission of contact form data
      console.log("Contact form data:", contactFormData);
    }
  };

  const handleSubmitAppointmentForm = (e) => {
    e.preventDefault();
    if (validateAppointmentForm()) {
      // Handle submission of appointment form data
      console.log("Appointment form data:", appointmentFormData);
    }
  };

  const isValidEmail = (email) => {
    // You can implement a more robust email validation logic here
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const handleAppointmentFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentFormData({
      ...appointmentFormData,
      [name]: value,
    });
  };

  return (
    <Container className="mb-5">
      <Row>
        <Col md={6} className="contact-container">
          <Container className="p-3">
            <Form onSubmit={handleSubmitContactForm}>
              <h4 className="p-2 mb-3 text-center">
                Request more information about this property
              </h4>
              <h5 className="text-success text-center">Contact Information</h5>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactFormChange}
                  isInvalid={!!contactFormErrors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {contactFormErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactFormChange}
                  isInvalid={!!contactFormErrors.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {contactFormErrors.phone}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactFormChange}
                  isInvalid={!!contactFormErrors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {contactFormErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactFormChange}
                  isInvalid={!!contactFormErrors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {contactFormErrors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="mt-3" type="submit" variant="success">
                Submit
              </Button>
            </Form>
          </Container>
        </Col>
        <Col md={6}>
          <Container className="contact-container p-3">
            <Form onSubmit={handleSubmitAppointmentForm}>
              <h3 className="p-2 mb-3 text-center">Make an Appointment</h3>
              <Row>
                <Col>
                  <Form.Group controlId="appointmentDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="appointmentDate"
                      value={appointmentFormData.appointmentDate}
                      onChange={handleAppointmentFormChange}
                      isInvalid={!!appointmentFormErrors.appointmentDate}
                    />
                    <Form.Control.Feedback type="invalid">
                      {appointmentFormErrors.appointmentDate}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="appointmentMonth">
                    <Form.Label>Month</Form.Label>
                    <Form.Control
                      type="text"
                      name="appointmentMonth"
                      value={appointmentFormData.appointmentMonth}
                      onChange={handleAppointmentFormChange}
                      isInvalid={!!appointmentFormErrors.appointmentMonth}
                    />
                    <Form.Control.Feedback type="invalid">
                      {appointmentFormErrors.appointmentMonth}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="appointmentYear">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      name="appointmentYear"
                      value={appointmentFormData.appointmentYear}
                      onChange={handleAppointmentFormChange}
                      isInvalid={!!appointmentFormErrors.appointmentYear}
                    />
                    <Form.Control.Feedback type="invalid">
                      {appointmentFormErrors.appointmentYear}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="appointmentTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="text"
                  name="appointmentTime"
                  value={appointmentFormData.appointmentTime}
                  onChange={handleAppointmentFormChange}
                  isInvalid={!!appointmentFormErrors.appointmentTime}
                />
                <Form.Control.Feedback type="invalid">
                  {appointmentFormErrors.appointmentTime}
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="mt-3" type="submit" variant="success">
                Schedule Appointment
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
