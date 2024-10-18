
import EmailSignup from "./component/EmailSignUp"
import FeaturesSection from "./component/FeatureSection"
import Footer from "./component/Footer"

import Join from "./component/Join"
import MissionComponent from "./component/MissonComponent"
import PricingCard from "./component/PricingCard"
import ReferralProgram from "./component/RefferalProgram"
import Review from "./component/Review"
import TopSection from "./component/TopSection/TopSection"
import UpcomingEvents from "./component/UpcomingEvent"

import VIPCountdownComponent from "./component/VIPCountDown"
import Vision from "./component/Vision"



function App() {
  return (
    <div >
         <div>
      {/* <Header/> */}
      <TopSection/>
      <ReferralProgram/>
      <FeaturesSection/>
      <PricingCard/>
      <VIPCountdownComponent/>
      <UpcomingEvents />
      <Review/>
      <Join/>
      {/* <HeroSection/> */}
      {/* <Board/> */}
      {/* <Customer/>
      <WhyChooseUs/>
      
      <Update/> */}
     
      
      {/* <IdeaSubmissionForm /> */}
    
     
      {/* <PricingCard/> */}
      
 
     
      {/* <CreatorDashboard/> */}
      <MissionComponent/>
      <Vision />
      <EmailSignup/>
      <Footer/>
    </div>
    </div>
  )
}

export default App