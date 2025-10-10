import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user1 from '../assets/user-1.jpg';
import user2 from '../assets/user-2.jpg';

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialsData = [
    {
      rating: 5,
      comment: "Fantastic decoration",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate libero voluptas, repudiandae quis doloribus accusantium et obcaecati ipsa aliquid dicta.",
      image: user1,
      name: "Rockie",
    },
    {
      rating: 5,
      comment: "Fantastic decoration",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate libero voluptas, obcaecati ipsa aliquid dicta.",
      image: user1,
      name: "John Doe",
    },
    {
      rating: 5,
      comment: "Fantastic decoration",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam consectetur. Nostrum atque repudiandae nulla. Voluptate libero voluptas, repudiandae quis doloribus accusantium et obcaecati ipsa aliquid dicta.",
      image: user2,
      name: "John Doe",
    },
    {
      rating: 5,
      comment: "Fantastic decoration",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate libero voluptas, obcaecati ipsa aliquid dicta.",
      image: user1,
      name: "John Doe",
    },
    {
      rating: 5,
      comment: "Fantastic decoration",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate libero voluptas, obcaecati ipsa aliquid dicta.",
      image: user1,
      name: "John Doe",
    },
  ];

  return (
    <div className="container mt-5 mb-3">
      <h2 className="text-center mb-3">
        Our collection of emotions <i className="bi bi-heart-fill text-danger"></i>
      </h2>
      <Slider {...settings} className="testimonials">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <div className="ratings">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i className="bi bi-star-fill" key={i}></i>
              ))}
            </div>
            <h4>{testimonial.comment}</h4>
            <p>{testimonial.text}</p>
            <div className="d-flex align-items-center">
              <img src={testimonial.image} alt="" className="img-fluid" style={{ width: "50px", height: "50px", borderRadius: "50%" }}/>
              <div className="ms-2">
                <h5>{testimonial.name}</h5>
                <span>
                  <i className="bi bi-dash-lg"></i> Customer
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
