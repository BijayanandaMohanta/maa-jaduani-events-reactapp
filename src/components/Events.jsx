import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import eventImage from '../assets/event.jpg';

function Events() {
  const eventsData = [
    {
      title: 'Corporate Conference',
      description: 'A professional conference for industry leaders.',
      date: '2025-11-15',
      location: 'Convention Center',
      image: eventImage,
    },
    {
      title: 'Grand Wedding',
      description: 'A beautiful wedding celebration.',
      date: '2025-12-20',
      location: 'Grand Ballroom',
      image: eventImage,
    },
    {
      title: 'Exhibition',
      description: 'An exhibition showcasing the latest trends.',
      date: '2026-01-10',
      location: 'Exhibition Hall',
      image: eventImage,
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Upcoming Events</h2>
      <div className="row">
        {eventsData.map((event, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img src={event.image} className="card-img-top" alt={event.title} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">{event.description}</p>
                <p className="card-text">
                  <small className="text-muted">Date: {event.date}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">Location: {event.location}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
