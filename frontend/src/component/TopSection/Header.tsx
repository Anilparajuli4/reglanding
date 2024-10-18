


function Header() {
  return (
    <div className="w-full">
        <div className="flex justify-between text-[#fff] p-5">
        <div className="flex items-center mb-4 md:mb-0">
          <img className='h-9' src='/images/logo.png' />
          <h1 className="text-2xl font-bold">Regaarder</h1>
        </div>
            <div>
                <ul className='flex font-semibold text-md gap-14'>
                    <li>Home</li>
                    <li>Contest</li>
                    <li>Refer&Earn</li>
                    <li>Become a VIP</li>
                </ul>
            </div>
            <div>
                <button className="bg-[#fff] text-black font-semibold px-3 py-2 rounded-md">Get Started free</button>
            </div>
        </div>
    </div>
  )
}

export default Header