import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2kxyr6r', 'template_vv6cznz', form.current, {
        publicKey: 'shBkeBeEspvDOIYzp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  return (
    <div className="form-container">
      <h1>Contact us!</h1>
      <form 
      ref={form}
      onSubmit={sendEmail}>
        <div className="input-container">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label>Name</label>
        </div>
        <div className="input-container">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <label>Email</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
          <label>Subject</label>
        </div>
        <div className="input-container">
          <textarea
            value={message}
            onChange={handleMessageChange}
            required
          ></textarea>
          <label>Message</label>
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
