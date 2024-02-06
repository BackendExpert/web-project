import { useState } from "react"
import SlLogo from "../assets/pngegg.png"
import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  let [open, OpenMenu] = useState(false);

  return(
    <div className="shadow-md w-full fixed top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-gray-700 text-white py-4 md:px-20 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="text-3x1 text-indigo-600 flex">
            <img src={SlLogo} alt="" className="h-8 w-8"/>
            <span className="px-4">NIFS</span>
          </span>
            <div onClick={() => OpenMenu(!open)} className="text-xl absolute right-8 top-5 cursor-pointer">
                <span><IonIcon name={open ? "close" : "menu"} /></span>
            </div>
            <div className={`items-center py-6 px-4 absolute static bg-gray-700  z-auto z-[-1] left-100 md:w-auto w-auto md:pl-0 pl-9  md:mr-0 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
              <h1 className="text-3xl md:px-8 px-2">About</h1>
              <div className="md:grid grid-cols-4 gap-4 md:px-12">                  
                  <div>
                    <span>Institute</span>
                    <ul>
                      <li><a href=""></a></li>
                    </ul>
                  </div>
                  <div>
                    <span>About</span>
                  </div>
                  <div>
                    <span>About</span>
                  </div>
                  <div>
                    <span>About</span>
                  </div>
                  <div>
                    <span>About</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default NavBar