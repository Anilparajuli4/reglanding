
import CreatorDashboard from "../component/CreateorDashboard"
import FeaturesSection from "../component/FeatureSection"
import Footer from "../component/Footer"
import Join from "../component/Join"
import PricingCard from "../component/PricingCard"
import ReferralProgram from "../component/RefferalProgram"
import Review from "../component/Review"

import TopSectionCreator from "../component/TopSectionCreator/TopSection"
import VIPCountdownComponent from "../component/VIPCountDown"
import Vision from "../component/Vision"


function LandingCreator() {
  return (
    <div className="overflow-x-hidden">
      <div>
        <TopSectionCreator/>
        <ReferralProgram/>
        <FeaturesSection/>
        <PricingCard/> 
        <VIPCountdownComponent/>
        <CreatorDashboard/>
        <Review />
        <Join/>
        <Vision/>
        
        <Footer/>
        </div>
    </div>
  )
}

export default LandingCreator