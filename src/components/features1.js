import React, { useState } from 'react'
import projectData from '../assets/locales/en.json'
import './features1.css'

const Features1 = () => {
  const [activeTab, setActiveTab] = useState(0)

  // const { features, feature1ImgAlt, feature3Description, feature3Title, feature3ImgSrc, feature1ImgSrc, feature2Description, feature1Title, feature3ImgAlt, feature1Description, feature2ImgSrc, feature2ImgAlt, feature2Title  } = projectData.paddingSection

  const features = projectData.paddingSection?.features || [];
  return (

    <div className="thq-section-padding">
    <div className="features1-container2 thq-section-max-width">
      {/* Image Container */}
      <div className="features1-image-container">
        {features.map((feature, index) =>
          activeTab === index ? (
            <img
              // key={feature.id}
              key={index}
              alt={feature.imgAlt}
              src={feature.imgSrc}
              className={`features1-image${feature.id + 1} thq-img-ratio-16-9`}
              // className="features1-image2 thq-img-ratio-16-9"
            />
          ) : null
        )}
      </div>

      {/* Tabs Menu */}
      <div className="features1-tabs-menu">
        {features.map((feature, index) => (
          <div
            // key={feature.id}
            key={index}
            // onClick={() => setActiveTab(feature.id)}
            onClick={() => setActiveTab(index)}
            className={`features1-tab-horizontal${index + 1}`}
            // className="features1-tab-horizontal3"
          >
            {/* <div className={`features1-divider-container${feature.id + 1}`}> */}
            <div className="features1-divider-container1">
              {activeTab === index && (
                <div className={feature.containerClass}></div>
              )}
            </div>
            <div className={`features1-content${index + 1}`}>
              <h2 className="thq-heading-2">{feature.title}</h2>
              <span className="thq-body-small">{feature.description}</span>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="thq-section-padding">
    //   <div className="features1-container2 thq-section-max-width">
    //     <div className="features1-image-container">
    //       {activeTab === 0 && (
    //         <img
    //           alt={feature1ImgAlt}
    //           src={feature1ImgSrc}
    //           className="features1-image1 thq-img-ratio-16-9"
    //         />
    //       )}
    //       {activeTab === 1 && (
    //         <img
    //           alt={feature2ImgAlt}
    //           src={feature2ImgSrc}
    //           className="features1-image2 thq-img-ratio-16-9"
    //         />
    //       )}
    //       {activeTab === 2 && (
    //         <img
    //           alt={feature3ImgAlt}
    //           src={feature3ImgSrc}
    //           className="features1-image3 thq-img-ratio-16-9"
    //         />
    //       )}
    //     </div>
    //     <div className="features1-tabs-menu">
    //       <div
    //         onClick={() => setActiveTab(0)}
    //         className="features1-tab-horizontal1"
    //       >
    //         <div className="features1-divider-container1">
    //           {activeTab === 0 && <div className="features1-container3"></div>}
    //         </div>
    //         <div className="features1-content1">
    //           <h2 className="thq-heading-2">{feature1Title}</h2>
    //           <span className="thq-body-small">
    //             {feature1Description}
    //           </span>
    //         </div>
    //       </div>
    //       <div
    //         onClick={() => setActiveTab(1)}
    //         className="features1-tab-horizontal2"
    //       >
    //         <div className="features1-divider-container2">
    //           {activeTab === 1 && <div className="features1-container4"></div>}
    //         </div>
    //         <div className="features1-content2">
    //           <h2 className="thq-heading-2">{feature2Title}</h2>
    //           <span className="thq-body-small">
    //             {feature2Description}
    //           </span>
    //         </div>
    //       </div>
    //       <div
    //         onClick={() => setActiveTab(2)}
    //         className="features1-tab-horizontal3"
    //       >
    //         <div className="features1-divider-container3">
    //           {activeTab === 2 && <div className="features1-container5"></div>}
    //         </div>
    //         <div className="features1-content3">
    //           <h2 className="thq-heading-2">{feature3Title}</h2>
    //           <span className="thq-body-small">
    //             {feature3Description}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Features1
