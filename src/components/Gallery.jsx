import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';
import ad from '../assets/ad.jpg';
import event from '../assets/event.jpg';
import about from '../assets/about.jpg';

function Gallery() {
  const galleryImages = [
    {
      src: slider1,
      alt: 'Event 1',
    },
    {
      src: slider2,
      alt: 'Event 2',
    },
    {
      src: slider3,
      alt: 'Event 3',
    },
    {
      src: ad,
      alt: 'Ad 1',
    },
    {
      src: event,
      alt: 'Event 4',
    },
    {
      src: about,
      alt: 'About 1',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Our Gallery</h2>
      <div className="row">
        {galleryImages.map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <img src={image.src} alt={image.alt} className="img-fluid rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
