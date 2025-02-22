import React, { useState } from 'react';
import projectData from '../assets/locales/en.json';
import './features2.css';

const Features2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const features = projectData.paddingSection2?.features || []; 

  return (
    <div className="thq-section-padding">
      <div className="features2-container2 thq-section-max-width">
        {/* Tabs Menu */}
        <div className="features2-tabs-menu">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`features2-tab-horizontal${index + 1}`}
            >
              <div className={`features2-divider-container${index + 1}`}>
                {activeTab === index && (
                  <div className={feature.containerClass}></div>
                )}
              </div>
              <div className={`features2-content${index + 1}`}>
                <h2 className="thq-heading-2">{feature.title}</h2>
                <span className="thq-body-small">{feature.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Container */}
        <div className="features2-image-container">
          {features.map((feature, index) =>
            activeTab === index ? (
              <img
                key={index}
                alt={feature.imgAlt}
                src={feature.imgSrc}
                className={`features2-image${index + 1} thq-img-ratio-16-9`}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Features2;


// import React, { useState } from 'react'
// import projectData from '../assets/locales/en.json'
// import './features2.css'

// const Features2 = (props) => {
//   const [activeTab, setActiveTab] = useState(0)
//   const features = projectData.paddingSection?.features || []

//   return (
//     <div className="thq-section-padding">
//       <div className="features2-container2 thq-section-max-width">
//         <div className="features2-tabs-menu">
//           <div
//             onClick={() => setActiveTab(0)}
//             className="features2-tab-horizontal1"
//           >
//             <div className="features2-divider-container1">
//               {activeTab === 0 && <div className="features2-container3"></div>}
//             </div>
//             <div className="features2-content1">
//               <h2 className="thq-heading-2">{props.feature1Title}</h2>
//               <span className="thq-body-small">
//                 {props.feature1Description}
//               </span>
//             </div>
//           </div>
//           <div
//             onClick={() => setActiveTab(1)}
//             className="features2-tab-horizontal2"
//           >
//             <div className="features2-divider-container2">
//               {activeTab === 1 && <div className="features2-container4"></div>}
//             </div>
//             <div className="features2-content2">
//               <h2 className="thq-heading-2">{props.feature2Title}</h2>
//               <span className="thq-body-small">
//                 {props.feature2Description}
//               </span>
//             </div>
//           </div>
//           <div
//             onClick={() => setActiveTab(2)}
//             className="features2-tab-horizontal3"
//           >
//             <div className="features2-divider-container3">
//               {activeTab === 2 && <div className="features2-container5"></div>}
//             </div>
//             <div className="features2-content3">
//               <h2 className="thq-heading-2">{props.feature3Title}</h2>
//               <span className="thq-body-small">
//                 {props.feature3Description}
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="features2-image-container">
//           {activeTab === 0 && (
//             <img
//               alt={props.feature1ImgAlt}
//               src={props.feature1ImgSrc}
//               className="features2-image1 thq-img-ratio-16-9"
//             />
//           )}
//           {activeTab === 1 && (
//             <img
//               alt={props.feature2ImgAlt}
//               src={props.feature2ImgSrc}
//               className="features2-image2 thq-img-ratio-16-9"
//             />
//           )}
//           {activeTab === 2 && (
//             <img
//               alt={props.feature3ImgAlt}
//               src={props.feature3ImgSrc}
//               className="features2-image3 thq-img-ratio-16-9"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// Features2.defaultProps = {
//   feature3Description:
//     'Get access to exclusive nutrition tips and advice to fuel your runs and enhance your performance.',
//   feature1ImgAlt: 'Group Runs Image',
//   feature1Description:
//     "Join us every week for group runs around London's scenic routes. Meet new friends and stay motivated together.",
//   feature3ImgAlt: 'Nutrition Tips Image',
//   feature2Title: 'Running Events',
//   feature1Title: 'Weekly Group Runs',
//   feature1ImgSrc:
//     'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDk2MTA3MHw&ixlib=rb-4.0.3&q=80&w=1080',
//   feature3ImgSrc:
//     'https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDk2MTA3MXw&ixlib=rb-4.0.3&q=80&w=1080',
//   feature2Description:
//     'Participate in exciting running events and races with the Freddos & Friends club. Challenge yourself and have fun!',
//   feature3Title: 'Nutrition Tips',
//   feature2ImgAlt: 'Running Events Image',
//   feature2ImgSrc:
//     'https://images.unsplash.com/photo-1473181488821-2d23949a045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNDk2MTA3MXw&ixlib=rb-4.0.3&q=80&w=1080',
// }



// export default Features2
