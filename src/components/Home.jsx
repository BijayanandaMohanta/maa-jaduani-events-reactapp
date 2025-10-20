import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/style.css';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';
import miniGallery from './MiniGallery';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const aboutSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const services = [
    {
      title: 'Corporate Events',
      description: 'We deep dive to the corporate sectors and know their pattern deeply which helps us to fulfill your event requirements.',
      images: [slider1, slider2, slider3],
    },
    {
      title: 'Social Events',
      description: 'We create memorable social events with attention to every detail.',
      images: [slider2, slider3, slider1],
    },
    {
      title: 'Exhibitions',
      description: 'We organize exhibitions that are engaging and impactful.',
      images: [slider3, slider1, slider2],
    },
  ];

  return (
    <>
      <div className="container-fluid overflow-hidden">
        <Slider {...sliderSettings}>
          <div>
            <img src={slider1} alt="" style={{ width: '100%', height: '38rem', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={slider2} alt="" style={{ width: '100%', height: '38rem', objectFit: 'cover' }} />
          </div>
          <div>
            <img src={slider3} alt="" style={{ width: '100%', height: '38rem', objectFit: 'cover' }} />
          </div>
        </Slider>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-3">About Us</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae minima ab quod doloribus labore natus eius,
                maiores iusto non tempore eum amet placeat tempora qui pariatur reprehenderit quaerat sit blanditiis nobis
                consequuntur autem. Nostrum voluptas quia doloribus totam repellendus eius, architecto alias repellat fugit
                vitae itaque repudiandae, ea dicta rem maxime perspiciatis et laudantium quas. Vitae odio, quos eius ullam
                provident impedit consequuntur unde laudantium ratione vel ea mollitia! Ex nostrum delectus quidem aliquid!
                Eaque cupiditate, praesentium expedita quisquam ullam similique beatae nemo quod, numquam aliquam dicta minus
                omnis mollitia quis in nulla sed asperiores voluptate esse! At, earum odit!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima obcaecati quos officia, ad nihil corrupti
                reprehenderit distinctio. Non, totam. Sed vitae, at quaerat, dignissimos est libero et eos repellendus esse
                sint ducimus veritatis praesentium aliquid? Eos tenetur aliquam quibusdam, tempore quam commodi recusandae,
                distinctio dolorem explicabo officiis sit expedita nesciunt.
              </p>
              <a href="#" className="btn btn-dark">
                Read more <i className="bi bi-arrow-up-right-circle"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <Slider {...aboutSliderSettings} className="about-slider">
              <div className="item">
                <i className="bi bi-balloon-heart"></i>
                <h3>Decoration</h3>
              </div>
              <div className="item">
                <i className="bi bi-bag-heart"></i>
                <h3>Shopping</h3>
              </div>
              <div className="item">
                <i className="bi bi-buildings"></i>
                <h3>Place</h3>
              </div>
              <div className="item">
                <i className="bi bi-gift"></i>
                <h3>Gift</h3>
              </div>
              <div className="item">
                <i className="bi bi-heart"></i>
                <h3>Love</h3>
              </div>
            </Slider>
            <Slider {...aboutSliderSettings} className="about-slider-rev">
              <div className="item">
                <i className="bi bi-balloon-heart"></i>
                <h3>Decoration</h3>
              </div>
              <div className="item">
                <i className="bi bi-bag-heart"></i>
                <h3>Shopping</h3>
              </div>
              <div className="item">
                <i className="bi bi-buildings"></i>
                <h3>Place</h3>
              </div>
              <div className="item">
                <i className="bi bi-gift"></i>
                <h3>Gift</h3>
              </div>
              <div className="item">
                <i className="bi bi-heart"></i>
                <h3>Love</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <miniGallery />

      <div className="services-section">
        <h2 className="text-center mb-3 text-white">Services</h2>
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-6 mb-3" key={index}>
                <div className="service-hcard">
                  <Slider {...{
                      dots: false,
                      infinite: true,
                      speed: 500,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true,
                      autoplaySpeed: 3000,
                    }} className="service-image-slider">
                    {service.images.map((image, i) => (
                      <div className="item" key={i}>
                        <img src={image} alt="" />
                      </div>
                    ))}
                  </Slider>
                  <div>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default Home;
