import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
// import Features1 from '../components/features1'
import CTA from '../components/cta'
// import Features2 from '../components/features2'
// import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
// import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'
// import Hero2 from '../components/hero2'
import WeeklySchedule from '../components/WeeklySchedule'
import WhyRunWithUs from '../components/WhyRunWithUs'



const Home = () => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Freddos & Friends </title>
      </Helmet>
      <Navbar/>
      <Hero />
      {/* <Hero2 /> */}
      {/* <Features1/> */}
      <CTA/>
      <WhyRunWithUs />
      <WeeklySchedule />
      {/* <Features2/> */}
      {/* <Pricing/> */}
      <Steps/>
      <Testimonial/>
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}

export default Home
