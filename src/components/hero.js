// import React, { useRef, useEffect } from "react";
// import "./hero.css";
// import projectData from "../assets/locales/en.json";

// const Hero = () => {
//   const { heading1, content1, action1, images, logoSrc } = projectData.heroSection;
//   const sliderRef = useRef(null);

//   // Duplicate images for seamless scrolling
//   const duplicatedImages = [...images, ...images];

//   // Pause animation on mouse interaction
//   const handleMouseEnter = () => {
//     if (sliderRef.current) {
//       sliderRef.current.classList.add("paused");
//     }
//   };

//   const handleMouseLeave = () => {
//     if (sliderRef.current) {
//       sliderRef.current.classList.remove("paused");
//     }
//   };

//   // Enable manual scrolling with mouse
//   const handleMouseScroll = (e) => {
//     if (sliderRef.current) {
//       e.preventDefault();
//       sliderRef.current.scrollLeft += e.deltaY;
//     }
//   };

//   useEffect(() => {
//     if (sliderRef.current) {
//       sliderRef.current.addEventListener("wheel", handleMouseScroll);
//     }

//     return () => {
//       if (sliderRef.current) {
//         sliderRef.current.removeEventListener("wheel", handleMouseScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className="hero-container">
//       <div className="hero-content-wrapper">
//         {/* Left Content */}
//         <div className="hero-text-section">
//           <img alt="logo" src={logoSrc} className="navbar-image1" />
//           <h1 className="hero-heading">{heading1}</h1>
//           <p className="hero-subheading">{content1}</p>
//           <button className="hero-button">{action1}</button>
//         </div>

//         {/* Right Content */}
//         <div
//           className="hero-image-section"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="hero-image-slider" ref={sliderRef}>
//             {duplicatedImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={image.url}
//                 alt={image.alt}
//                 className="hero-slider-image"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React, { useRef, useEffect, useState } from "react";
import "./hero.css";
import projectData from "../assets/locales/en.json";

const Hero = () => {
  const { heading1, heading2, content1, action1, images, logoSrc } = projectData.heroSection;
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate images for seamless scrolling
  const duplicatedImages = [...images, ...images];

  // Pause animation on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (sliderRef.current) {
      sliderRef.current.classList.add("paused");
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (sliderRef.current) {
      sliderRef.current.classList.remove("paused");
    }
  };

  // Enable manual horizontal scrolling
  const handleMouseScroll = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;

    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleMouseScroll);
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleMouseScroll);
      }
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content-wrapper">
        {/* Left Content */}
        <div className="hero-text-section">
          <img alt="logo" src={logoSrc} className="navbar-image1" />
          <h1 className="hero-headingH1">{heading1}</h1>
          <h1 className="hero-heading">{heading2}</h1>
          <p className="hero-subheading">{content1}</p>
          <button className="hero-button">{action1}</button>
        </div>

        {/* Right Content */}
        <div
          className="hero-image-section"
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`hero-image-slider ${isPaused ? "paused" : ""}`}
          >
            {duplicatedImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                className="hero-slider-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;



// import React from 'react';
// import './hero.css';
// import projectData from '../assets/locales/en.json';
// import Script from 'dangerous-html/react';


// const Hero = () => {
//   const { heading1, content1, action1, images, logoSrc } = projectData.heroSection;

//   return (
//     <div className="hero-container" >
//       <div className="hero-content-wrapper">
//         {/* Left Content */}
//         <div className="hero-text-section">
//         <img
//           alt="logo"
//           src={logoSrc}
//           className="navbar-image1"
//         />
//           <h1 className="hero-heading">{heading1}</h1>
//           <p className="hero-subheading">{content1}</p>
//           <button className="hero-button">
//             {action1}
//           </button>
//         </div>
//         {/* Right Content */}
//         <div className="hero-image-section">
//           {images && images.length > 0 && (
//             <img
//               src={images[0].url}
//               alt={images[0].alt}
//               className="hero-main-image"
//             />
//           )}
//         </div>
        
//       </div>




//       <div className="hero-content2">
//         <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
//           <div className="thq-animated-group-horizontal">
//             {images.map((image) => (
//             <img
//               key={image.id}
//               alt={image.alt}
//               src={image.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//           <div className="thq-animated-group-horizontal">
//           {images.map((img) => (
//             <img
//               key={img.id}
//               alt={img.alt}
//               src={img.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//         </div>
//         <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
//           <div className="thq-animated-group-horizontal-reverse">
//           {images.map((i) => (
//             <img
//               key={i.id}
//               alt={i.alt}
//               src={i.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//           <div className="thq-animated-group-horizontal-reverse">
//           {images.map((img) => (
//             <img
//               key={img.id}
//               alt={img.alt}
//               src={img.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="hero-container2">
//           <Script
//             html={`<style>
//   @keyframes scroll-x {
//     from {
//       transform: translateX(0);
//     }
//     to {
//       transform: translateX(calc(-100% - 16px));
//     }
//   }

//   @keyframes scroll-y {
//     from {
//       transform: translateY(0);
//     }
//     to {
//       transform: translateY(calc(-100% - 16px));
//     }
//   }
// </style>
// `}
//           ></Script>
//         </div>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react'
// import './hero.css'
// import projectData from '../assets/locales/en.json'
// import Script from 'dangerous-html/react';

// const Hero = () => {
//   const { heading1, content1, action1, action2,images } = projectData.heroSection

//   return (
//     // <div className="hero-header78">
//     <div className="hero-header78">
//       <div className="hero-column thq-section-padding thq-section-max-width">
//         <div className="hero-content1">
//           <h1 className="hero-text1 thq-heading-1">{heading1}</h1>
//           <p className="hero-text2 thq-body-large">{content1}</p>
//         </div>
//         <div className="hero-actions">
//           <button className="thq-button-filled hero-button1">
//             <span className="thq-body-small">{action1}</span>
//           </button>
//           <button className="thq-button-outline hero-button2">
//             <span className="thq-body-small">{action2}</span>
//           </button>
//         </div>
//       </div>
//       <div className="hero-content2">
//         <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
//           <div className="thq-animated-group-horizontal">
//             {images.map((image) => (
//             <img
//               key={image.id}
//               alt={image.alt}
//               src={image.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//           <div className="thq-animated-group-horizontal">
//           {images.map((img) => (
//             <img
//               key={img.id}
//               alt={img.alt}
//               src={img.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//         </div>
//         <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
//           <div className="thq-animated-group-horizontal-reverse">
//           {images.map((i) => (
//             <img
//               key={i.id}
//               alt={i.alt}
//               src={i.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//           <div className="thq-animated-group-horizontal-reverse">
//           {images.map((img) => (
//             <img
//               key={img.id}
//               alt={img.alt}
//               src={img.url}
//               className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
//             />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="hero-container2">
//           <Script
//             html={`<style>
//   @keyframes scroll-x {
//     from {
//       transform: translateX(0);
//     }
//     to {
//       transform: translateX(calc(-100% - 16px));
//     }
//   }

//   @keyframes scroll-y {
//     from {
//       transform: translateY(0);
//     }
//     to {
//       transform: translateY(calc(-100% - 16px));
//     }
//   }
// </style>
// `}
//           ></Script>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default Hero
