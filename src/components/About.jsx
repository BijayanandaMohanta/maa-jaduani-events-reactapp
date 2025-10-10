import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from '../assets/about.jpg';

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">About Maa Jaduani Events</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={aboutImage} alt="About Us" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo eu velit tincidunt
            bibendum. Sed euismod, nunc eget aliquam ultricies, nunc nisl ultricies nunc, eget aliquam
            nunc.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>Excellence</li>
            <li>Creativity</li>
            <li>Customer Satisfaction</li>
          </ul>
          <h3>Services We Offer</h3>
          <ul>
            <li>Event Planning</li>
            <li>Decoration</li>
            <li>Catering</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
