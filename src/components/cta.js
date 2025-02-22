import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2" data-animated="true">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="thq-button-filled">
                {/* <button type="button" className="hero-button"> */}
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  heading1: 'Join Freddos & Friends Running Club!',
  content1:
    'Are you a Greek girl based in London looking to join a fun and supportive running community? Look no further!',
  action1: 'Sign Up Now',
}

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA
