

function Content() {
  return (
    <div className="text-[#fff] mt-6 py-6 ">
        <div className="flex flex-col items-center">
            <div className="p-6 px-16 flex   flex-col gap-y-4">
                <p className="md:text-7xl text-lg font-semibold text-center">Demand the Content You Crave <br/><span className="text-[#CAAFDE] inline-block mt-2">– Watch What You Want, When You Want.</span></p>
                <p className="text-[#666] text-[8px] md:text-[16px] text-center">Because Your Time Deserves Content That Speaks to You, From a Platform That Delivers.</p>
            </div>
            <div className="px-16">
                <button  className="py-3 px-3 font-semibold text-black rounded-xl bg-[#fff]">Get started for free</button>
            </div>
        </div>
        <div className="mt-20 px-16">
            <img src='/images/frontuser.png' className="bg-cover w-full" height={1000} width={1000} alt="img"/>
        </div>
    </div>
  )
}

export default Content