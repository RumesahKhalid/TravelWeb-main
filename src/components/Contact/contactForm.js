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

  function sendEmail (e) {
    e.preventDefault();
  
    emailjs
      .sendForm('service_2kxyr6r', 'template_vv6cznz', form.current, {
        publicKey: 'shBkeBeEspvDOIYzp',
      })

      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  

  return (
    <div className="form-container">
      <h1>Contact us!</h1>
      <form 
      ref={form}
      onSubmit={sendEmail}>
        <div className="input-container">
          <input
            name="user_name"
            type="text"
            value={inputData.user_name}
            onChange={handleData}
            required
          />
          <label>Name</label>
        </div>
        <div className="input-container">
          <input
            type="email"
            name="user_email"
            value={inputData.user_email}
            onChange={handleData}
            required
          />
          <label>Email</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="subject"
            value={inputData.subject}
            onChange={handleData}
            required
          />
          <label>Subject</label>
        </div>
        <div className="input-container">
          <textarea
            name="message"
            value={inputData.message}
            onChange={handleData}
            required
          ></textarea>
          <label>Message</label>
        </div>
        <div>
          <button type="submit" className="btn">Send Message</button>
        </div>  
      </form>
    </div>
  );
}

export default ContactForm;
