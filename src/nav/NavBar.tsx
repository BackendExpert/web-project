import { useState } from "react"
import SlLogo from "../assets/pngegg.png"
import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  let [open, OpenMenu] = useState(false);
  let [opensbm, OpensMenu] = useState(false);
  let [newSubm, NewSubOpen] = useState(false);
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
            <li className="md:ml-8 text xl md:my-0 my-7">
              <span onClick={() => OpensMenu(!opensbm)} className="cursor-pointer">Hellooo World <span><IonIcon name={opensbm ? "chevron-up-outline" : "chevron-down-outline"} /></span></span>
              <ul className={`items-center pb-0 pb-12 absolute static bg-white z-auto z-[-1] left-100 w-full w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${opensbm ? 'top-16':'top-[-490px]'}`}>
                  <li className="md:py-5 px-4"><a href="#">hellow W</a></li>
                  <li className="md:py-5 px-4"><a href="#">hellow W</a></li>
                  <li className="md:py-5 px-4">
                  <span onClick={() => NewSubOpen(!newSubm)} className="cursor-pointer">Hellooo World <span><IonIcon name={newSubm ? "chevron-up-outline" : "chevron-down-outline"} /></span></span>
                    <ul className={`items-center pb-0 pb-12 absolute static bg-white z-auto z-[-1] left-100 w-full w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${newSubm ? 'top-16':'top-[-490px]'}`}>
                      <li className=""><a href="#">new Sub 1</a></li>
                      <li className=""><a href="#">new Sub 1</a></li>
                      <li className=""><a href="#">new Sub 1</a></li>
                    </ul>
                  </li>
                  <li className="md:py-5 px-4"><a href="#">hellow W</a></li>
                  <li className="md:py-5 px-4"><a href="#">hellow W</a></li>
                  <li className="md:py-5 px-4"><a href="#">hellow W</a></li>
                  <li className="md:py-5 px-4"><a href="#">hellow W</a></li>
              </ul>
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