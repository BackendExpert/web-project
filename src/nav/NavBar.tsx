import LogoSl from '../assets/pngegg.png'

const NavBar = () => {
  return (
    <div>
        <nav className='container mx-auto h-auto px-2 py-2'>
        <div className="px-2 py-2 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={LogoSl} className="h-8" alt="SlLogo" />
                <div className="pl-2 text-xs">
                    <ul>
                      <li className="text-blue-800 text-4xl">NIFS</li>
                    </ul>
                </div>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar