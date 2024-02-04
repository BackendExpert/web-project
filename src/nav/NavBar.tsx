import { useState } from "react"
import SlLogo from "../assets/pngegg.png"
import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  let [open, OpenMenu] = useState(false);
  let [opensbm, OpensMenu] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-20 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="text-3x1 text-indigo-600 flex">
            <img src={SlLogo} alt="" className="h-8 w-8"/>
            <span className="px-4">NIFS</span>
          </span>
          </div>
          <div onClick={() => OpenMenu(!open)} className="text-xl absolute right-8 top-5 cursor-pointer md:hidden">
            <span><IonIcon name={open ? "close" : "menu"} /></span>
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16':'top-[-490px]'}`}>
          <div className="p-10">

              <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">Dropdown</span>
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                  <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                  <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                </ul>
              </div>

              </div>
            <li className="md:ml-8 text xl md:my-0 my-7">
              <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">Home</a>
            </li>
            <li className="md:ml-8 text xl md:my-0 my-7">
              <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">Home</a>
            </li>
            <li className="md:ml-8 text xl md:my-0 my-7">
              <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">Home</a>
            </li>
          </ul>
        

      </div>
    </div>
  )
}

export default NavBar