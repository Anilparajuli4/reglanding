

function Header() {
    return (
      <div className="w-full">
          <div className="flex justify-between p-5">
              <div>
                  <h1>logo</h1>
              </div>
              <div>
                  <ul className='flex font-bold text-sm gap-7'>
                      <li>Demos</li>
                      <li>Pages</li>
                      <li>Support</li>
                      <li>Contact</li>
                  </ul>
              </div>
              <div>
                  <button className='bg-secondary_color rounded text-white py-2 px-6'>Get Started free</button>
              </div>
          </div>
      </div>
    )
  }
  
  export default Header