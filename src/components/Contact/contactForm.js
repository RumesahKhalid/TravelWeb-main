import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs .sendForm('service_j9189qc', 'template_g7tza45', form.current, {
        publicKey: 'nwBPxhYdF1amOjibf',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          console.log('Message Send');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  emailjs.init('nwBPxhYdF1amOjibf');
  return (
    <div className="form-container">
      <h1>Contact us!</h1>
       <form  ref={form} onSubmit={sendEmail}>
        <div className="input-container">
          <input
            name="user_name"
            type="text"
            required
          />
          <label>Name</label>
        </div>
        <div className="input-container">
          <input type="email" name="user_email" required />
            <label>Email</label>
        </div>        
          <div className="input-container">
          <textarea
            name="message"
            required
          ></textarea>
          <label>Message</label>
        </div>
        <input type="submit" value="Send" className="btn" />
    </form>

    </div>
  );
}

export default ContactForm;
