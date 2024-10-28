import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import './Contact.css'


const Contact = ({ modalShow, setModalShow }) => {
  const [formData, setFormData] = useState({
    job_title: '',
    user_name: '',
    business_name: '',
    phone_number: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_6k7dyy7', 'template_jby1pfl', formData, 'FlfqaLJACzT_vLgoV')
      .then((response) => {
        console.log('Message sent successfully!', response.status, response.text);
        alert("Message sent successfully. Thank you for reaching out! I will get back to you within 24 hours.");
        setFormData({ job_title: '', user_name: '', business_name: '', phone_number: '', user_email: '', message: '' }); // Resets form once form is sent
        setModalShow(false); 
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Error message unable to send. Please try again.');
      });
  };

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{fontSize: '36px'}} >Start a Conversation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label htmlFor="job_title">Job Title: </label>
          <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} placeholder="Job Title" />
          
          <label htmlFor="user_name">Full Name: </label>
          <input type="text" name="user_name" value={formData.user_name} onChange={handleChange} placeholder="Your Name" required />
          
          <label htmlFor="business_name">Business: </label>
          <input type="text" name="business_name" value={formData.business_name} onChange={handleChange} placeholder="Business Name" />
          
          <label htmlFor="phone_number">Phone Number: </label>
          <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required />
          
          <label htmlFor="user_email">Email: </label>
          <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} placeholder="Your Email" required />
          
          <label htmlFor="message">Message: </label>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" />
          
          <Button variant="primary" type="submit">Send</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Contact
