import { WiDirectionRight } from "react-icons/wi";

function HeroSection() {
  return (
    <div>
        <div className="max-w-xl mx-auto py-3 pt-5">
           <div className="w-full flex flex-col items-center gap-y-4">
              <h1 className="text-4xl font-bold tex-center"><span className="ml-5">Transform Your Video</span> <br/> <span> Experience with Regarder</span></h1>
              <p className="text-gray-500 ">Be at the ForeFront of the of the Next Big Thing in Video</p>
              <button className="text-white rounded-md mt-3 py-2 px-6 bg-secondary_color flex items-center gap-2 justify-center">Get started for free <span><WiDirectionRight size={35}/></span></button>
            </div> 
           <div></div>
        </div>
    </div>
  )
}

export default HeroSection