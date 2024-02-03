import LogoSl from '../assets/pngegg.png'

const NavBar = () => {
  return (
    <div>
        <nav>
        <div className="px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={LogoSl} className="h-16" alt="SlLogo" />
                <div className="pl-2 text-xs">
                    <ul>
                      <li>National Institute of Fundamental Studies.</li>
                      <li>Ministry of Education</li>
                    </ul>
                  </div>
                </div>
             </div>
        </nav>
    </div>
  )
}

export default NavBar