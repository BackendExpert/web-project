import LogoSl from '../assets/pngegg.png'
import NavItems from './NavItems'

const NavBar = () => {
  return (
    <div className='bg-gray-600 bg-opacity-20'>
        <nav className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className="mx-auto w-full max-w-screen-xxl">
          <div className="px-2 py-2 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={LogoSl} className="h-8" alt="SlLogo" />
                  <div className="pl-2 text-xs">
                      <ul>
                        <li className="text-blue-800 text-4xl">NIFS</li>
                      </ul>
                  </div>
              </div>
              <NavItems />
          </div>
          </div>
        </nav>
    </div>
  )
}

export default NavBar