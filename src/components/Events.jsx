import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import eventImage from '../assets/event.jpg';

function Events() {
  const eventsData = [
    {
      title: 'Corporate Conference',
      description: 'A professional conference for industry leaders.',
      date: '2025-11-15',
      location: 'Convention',
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
              <div className="p-2"><img src={event.image} className="rounded img-fluid" alt={event.title} /></div>
              <div className="card-body">
                <div className="d-flex justify-content-between border-bottom mb-3 pb-1">
                  <h5 className="card-title">{event.title}</h5>
                  <div className='d-grid'>
                    <small className="text-muted">Date: {event.date}</small>
                    <small className="text-muted">Location: {event.location}</small>
                  </div>
                </div>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
