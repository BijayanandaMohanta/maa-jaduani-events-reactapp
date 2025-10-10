import React from 'react';
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';
import ad from '../assets/ad.jpg';
import event from '../assets/event.jpg';
import about from '../assets/about.jpg';

function MiniGallery() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Recent Events</h2>
      <div className="gallery_column">
        <img src={slider1} alt="" />
        <img src={slider2} alt="" />
        <img src={slider3} alt="" />
        <img src={ad} alt="" />
        <img src={event} alt="" />
        <img src={about} alt="" />
      </div>
    </div>
  );
}

export default MiniGallery;
