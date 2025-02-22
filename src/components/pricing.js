import React, { useState } from 'react';
import projectData from '../assets/locales/en.json';
import './pricing.css';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const pricingPlans = isMonthly
    ? projectData.pricingSection.monthlyPlans
    : projectData.pricingSection.yearlyPlans;

  return (
    <div className="pricing-pricing23 thq-section-padding">
      <div className="pricing-max-width thq-section-max-width">
        {/* Section Title */}
        <div className="pricing-section-title">
          <span className="pricing-text10 thq-body-small">
            {projectData.pricingSection.subtitle}
          </span>
          <div className="pricing-content">
            <h2 className="pricing-text11 thq-heading-2">
              {projectData.pricingSection.title}
            </h2>
            <p className="pricing-text12 thq-body-large">
              {projectData.pricingSection.description}
            </p>
          </div>
        </div>

        {/* Pricing Tabs */}
        <div className="pricing-tabs">
          <button
            onClick={() => setIsMonthly(true)}
            className={`pricing-button12 ${
              isMonthly ? 'thq-button-filled' : 'thq-button-outline'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`pricing-button10 ${
              !isMonthly ? 'thq-button-filled' : 'thq-button-outline'
            }`}
          >
            Yearly
          </button>
        </div>

        {/* Pricing Plans */}
        <div className={isMonthly ? 'pricing-container1' : 'pricing-container2'}>
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-column${plan.id} thq-card ${
                plan.featured ? 'pricing-featured-plan' : ''
              }`}
            >
              <div className={`pricing-price${plan.id}`}>
                <div className={`pricing-price${plan.id + 1}`}>
                  <p className={`pricing-text${plan.id * 10} thq-body-large`}>
                    {plan.name}
                  </p>
                  <h3 className={`pricing-text${plan.id * 10 + 1} thq-heading-3`}>
                    {plan.price}
                  </h3>
                  {plan.additionalInfo && (
                    <span className="thq-body-small">{plan.additionalInfo}</span>
                  )}
                </div>
                <div className={`pricing-list${plan.id}`}>
                  {plan.features.map((feature, index) => (
                    <div
                      key={index}
                      className={`pricing-list-item${plan.id * 10 + index}`}
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="thq-icon-small"
                      >
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="thq-body-small">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                className={`pricing-button${plan.id + 13} thq-button-animated ${
                  plan.featured ? 'thq-button-filled' : 'thq-button-outline'
                }`}
              >
                {plan.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;