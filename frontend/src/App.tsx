import Board from "./component/Board"
import CreatorDashboard from "./component/CreateorDashboard"
import Customer from "./component/Customer"
import FeaturesSection from "./component/FeatureSection"
import Footer from "./component/Footer"
import Header from "./component/Header"
import HeroSection from "./component/HeroSection"
import Join from "./component/Join"
import PricingCard from "./component/PricingCard"
import ReferralProgram from "./component/RefferalProgram"
import Review from "./component/Review"
import UpcomingEvents from "./component/UpcomingEvent"
import Update from "./component/Update"
import VIPCountdownComponent from "./component/VIPCountDown"
import WhyChooseUs from "./component/WhyChooseUs"


function App() {
  return (
    <div >
         <div>
      <Header/>
      <HeroSection/>
      <Board/>
      <Customer/>
      <WhyChooseUs/>
      <Join/>
      <ReferralProgram/>
      {/* <IdeaSubmissionForm /> */}
    
      <FeaturesSection/>
      {/* <PricingCard/> */}
      <PricingCard/>
      <VIPCountdownComponent/>
      <UpcomingEvents />
      <CreatorDashboard/>
      <Review/>
      <Update/>
      <Footer/>
    </div>
    </div>
  )
}

export default App