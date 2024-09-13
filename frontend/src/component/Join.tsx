import { WiDirectionRight } from "react-icons/wi"


function Join() {
  return (
    <div className="bg-secondary_color py-8 ">
        <div className="max-w-5xl flex mx-auto justify-between items-center">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold text-white">Join Revolution Now</h2>
                <p className="text-gray-300 text-sm">With lots of unique blocks, you can easily build a page without <br/> coding. Build your next landing page</p>
            </div>
            <div className="">
               <button className="bg-white rounded py-2 px-10 font-bold text-sm flex gap-2 items-center justify-center">Get Started <span><WiDirectionRight size={35}/></span></button>
            </div>
        </div>
    </div>
  )
}

export default Join