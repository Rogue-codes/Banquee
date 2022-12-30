import React from 'react'
import AllFeatures from '../../components/allFeatures/AllFeatures'
import Banking from '../../components/banking/Banking'
import BannerSection from '../../components/banner/BannerSection'
import DesignedForBusiness from '../../components/designedForBusinesses/DesignedForBusiness'
import Digital from '../../components/digital/Digital'
import Landing from '../../components/landing/Landing'
import Newsletter from '../../components/newsletter/Newsletter'
import Testimonial from '../../components/testimonials/Testimonial'
import Accordion from '../../widgets/accordion/Accordion'

function Home() {
  return (
    <div>
        <Landing/>
        <BannerSection/>
        <AllFeatures/>
        <Digital/>
        <DesignedForBusiness/>
        <Banking/>
        <Testimonial/>
        <Accordion/>
        <Newsletter/> 
    </div>
  )
}

export default Home