import React from 'react';
import contact_image from '../assets/contact.jpg';



function ContactForm() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-5">
          <img
            src={contact_image}
            alt=""
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-7">
          <h2 className="mb-3">Contact Us</h2>
          <form action="" method="post">
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter your phone"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
