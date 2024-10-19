import { Menu, X } from 'lucide-react'; 
import { useState } from 'react';


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="">
        <div className="flex justify-between text-[#fff] md:p-5 py-5 ">
        <div className="flex items-center mb-4 md:mb-0">
          <img className='h-9' src='/images/logo.png' />
          <h1 className="md:text-2xl text-2xl font-bold">Regaarder</h1>
        </div>
        <div className="md:hidden ml-16">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-14 h-10" />}
          </button>
        </div>
            <div className={` ${menuOpen ? 'flex flex-col' : 'hidden'} md:flex`} >
                <ul className='flex md:flex-row flex-col md:gap-14 font-semibold md:text-left text-center'>
                    <li>Home</li>
                    <li>Contest</li>
                    <li>Refer&Earn</li>
                    <li>Become a VIP</li>
                </ul>
            </div>
            <div>
                <button className="bg-[#fff] hidden md:inline-block text-black font-semibold px-3 py-2 rounded-md">Get Started free</button>
            </div>
        </div>
    </div>
  )
}

export default Header


