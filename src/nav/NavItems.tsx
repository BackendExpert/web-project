const NavItems = () => {
  return (
    <div>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="text-white fs-semibold hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex flex-wrap justify-end sm:mb-0">
            <li className="px-4"><a href="">Home</a></li>     
            <li className="px-4"><a href="">About</a></li>     
            <li className="px-4"><a href="">News & Events</a></li>                      
            <li className="px-4"><a href="">Academic</a></li>     
            <li className="px-4"><a href="">Publication</a></li>     
            <li className="px-4"><a href="">Careers</a></li>     
            <li className="px-4"><a href="">Contact</a></li>     
        </ul>
    </div>
    </div>
  )
}

export default NavItems