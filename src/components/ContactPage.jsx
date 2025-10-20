import React, { useState } from "react";
import "../styles/ContactForm.css";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.778029954869!2d85.82409227565307!3d19.807006528616753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c7615f1cb0eb%3A0x8c3d8836dac5fd02!2sMaa%20jaduani%20Events!5e0!3m2!1sen!2sin!4v1760945524307!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-2"
        ></iframe>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
