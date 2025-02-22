import React from 'react';
import '../style.css';


function WhyRunWithUs() {
  return (
    <section className="why-run-with-us">
      <h2 className="thq-heading-2">Why Run With us ?</h2>
      <div className="benefits-grid thq-grid-3">
        <div className="benefit">
          <span className="icon">👥</span>
          <h3 className="thq-heading-3">Inclusive Community</h3>
          <p className="thq-body-small">
            All fitness levels welcome in our supportive sisterhood
          </p>
        </div>
        <div className="benefit">
          <span className="icon">❤️</span>
          <h3 className="thq-heading-3">Health & Wellness</h3>
          <p className="thq-body-small">
            Expert guidance for your running and wellness journey
          </p>
        </div>
        <div className="benefit">
          <span className="icon">📍</span>
          <h3 className="thq-heading-3">London Routes</h3>
          <p className="thq-body-small">
            Discover the city through carefully planned scenic routes
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyRunWithUs;
