import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingUser from "./pages/LandingUser"
import LandingCreator from "./pages/LandingCreator"

function App() {
  return (
    <>
  <Router>
    <Routes>
      <Route path="/" element={<LandingUser/>}/>
      <Route path="/creator" element={<LandingCreator/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default App