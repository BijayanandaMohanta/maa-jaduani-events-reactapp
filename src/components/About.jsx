import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import aboutImage from '../assets/about.jpg';

function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">About Maa Jaduani Events</h2>
      <img src={aboutImage} alt="About Us" className="img-fluid rounded" />
      <div className="row align-items-top mt-4">
        <div className="col-md-6">
          <h5>Our Mission</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
            justo eu velit tincidunt bibendum. Sed euismod, nunc eget aliquam
            ultricies, nunc nisl ultricies nunc, eget aliquam nunc.
          </p>
          <h5>Our Values</h5>
          <ul>
            <li>Excellence</li>
            <li>Creativity</li>
            <li>Customer Satisfaction</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Services We Offer</h5>
          <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" id="planning-tab" data-bs-toggle="tab" href="#planning" role="tab" aria-controls="planning" aria-selected="true">Event Planning</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="decoration-tab" data-bs-toggle="tab" href="#decoration" role="tab" aria-controls="decoration" aria-selected="false">Decoration</a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" id="catering-tab" data-bs-toggle="tab" href="#catering" role="tab" aria-controls="catering" aria-selected="false">Catering</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="planning" role="tabpanel" aria-labelledby="planning-tab">
              At Maa Jaduani Events, we take pride in turning your dreams into reality. Our expert event planning team meticulously handles every detail, from concept development to execution. We specialize in creating memorable experiences for weddings, corporate events, and social gatherings, ensuring each event reflects your unique vision while maintaining the highest standards of professionalism and creativity.
            </div>
            <div className="tab-pane fade" id="decoration" role="tabpanel" aria-labelledby="decoration-tab">
              Our decoration services are designed to transform any venue into a stunning space that captures the essence of your event. We work closely with you to understand your vision and preferences, using high-quality materials and innovative designs to create a captivating atmosphere. From elegant floral arrangements to themed decor, our team ensures that every detail is thoughtfully curated to enhance your celebration.
            </div>
            <div className="tab-pane fade" id="catering" role="tabpanel" aria-labelledby="catering-tab">
              Our catering services are tailored to provide a delightful culinary experience that complements your event. We offer a diverse menu featuring gourmet dishes crafted from the freshest ingredients, ensuring that every guest enjoys a memorable dining experience. Whether it's an intimate gathering or a grand celebration, our team is dedicated to delivering exceptional service and exquisite flavors that will leave a lasting impression.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
