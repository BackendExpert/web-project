import { useState } from "react"
import SlLogo from "../assets/pngegg.png"
import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  let [open, OpenMenu] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-20 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="text-3x1 text-indigo-600">
            <img src={SlLogo} alt="" className="h-8 w-8"/>
          </span>
          </div>
          <div onClick={() => OpenMenu(!open)} className="text-xl absolute right-8 top-5 cursor-pointer md:hidden">
            <span><IonIcon name={open ? "close" : "menu"} /></span>
          </div>
          <ul className="md:flex md-item-center text-2xl text-blue-500 md:pb-0 pb-12">
            <li className="md:ml-8 text xl md:my-0 my-7">
              <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">Home</a>
            </li>
            <li className="md:ml-8 text xl md:my-0 my-7">
              <a href="#" className="text-gray-800 hover:text-gray-400 duration-500">Home</a>
            </li>
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