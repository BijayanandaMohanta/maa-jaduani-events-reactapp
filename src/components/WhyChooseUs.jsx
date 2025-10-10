import React from 'react';


function WhyChooseUs() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Why Choose Us?</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Expertise and Experience
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Our team brings years of experience in event planning and management.</strong> We have
              successfully organized a wide range of events, from corporate conferences to grand weddings. Our
              expertise ensures that every detail is meticulously planned and executed, providing a seamless
              experience for our clients.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Customized Solutions
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>We understand that every event is unique.</strong> Our team works closely with clients to
              tailor our services to their specific needs and preferences. Whether it's a themed party or a formal
              gala, we ensure that the event reflects the client's vision and style.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Attention to Detail
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>We believe that the little things make a big difference.</strong> Our meticulous attention to
              detail ensures that every aspect of the event, from the décor to the catering, is perfect. We leave no
              stone unturned to create an unforgettable experience for our clients and their guests.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              Strong Vendor Relationships
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>Our extensive network of trusted vendors and suppliers.</strong> We have built strong
              relationships with top vendors in the industry, ensuring that we can provide high-quality services and
              products at competitive prices. This allows us to offer our clients the best value for their
              investment.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              Stress-Free Planning
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>We take the stress out of event planning.</strong> Our comprehensive services cover everything
              from initial concept development to on-site coordination. Clients can relax and enjoy their event,
              knowing that every detail is being handled by our professional team.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
