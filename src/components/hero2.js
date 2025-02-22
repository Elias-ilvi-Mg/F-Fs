import React from 'react';
import './hero.css';
import projectData from '../assets/locales/en.json';
import Script from 'dangerous-html/react';

const Hero2 = () => {
    const { images } = projectData.heroSection;

    return (
        <div>
            
            <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            {images.map((image) => (
            <img
              key={image.id}
              alt={image.alt}
              src={image.url}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            ))}
          </div>
          <div className="thq-animated-group-horizontal">
          {images.map((img) => (
            <img
              key={img.id}
              alt={img.alt}
              src={img.url}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            ))}
          </div>
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
          {images.map((i) => (
            <img
              key={i.id}
              alt={i.alt}
              src={i.url}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            ))}
          </div>
          <div className="thq-animated-group-horizontal-reverse">
          {images.map((img) => (
            <img
              key={img.id}
              alt={img.alt}
              src={img.url}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            ))}
          </div>
        </div>
      </div>
      <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
        </div>
    );
};

export default Hero2;