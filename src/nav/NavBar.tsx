import { useState } from "react"
import SlLogo from "../assets/pngegg.png"
import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  let [open, OpenMenu] = useState(false);

  return(
    <div className="shadow-md w-full top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-gray-700 text-white py-4 md:px-20 px-7">
        <div className="cursor-pointer flex items-center text-white">
          <span className="text-3x1 text-indigo-600 flex">
            <img src={SlLogo} alt="" className="h-8 w-8"/>
            <span className="px-4 text-2xl">NIFS</span>
          </span>
          <ul className="text-xl absolute right-8 top-5 cursor-pointer pr-12"> 
            <li>Home</li>
          </ul>
            <div onClick={() => OpenMenu(!open)} className="text-xl absolute right-8 top-6 cursor-pointer">
                <span><IonIcon name={open ? "close" : "menu"} /></span>
            </div>
            <div className={`rounded items-center py-6 px-4 absolute static bg-gray-700  z-auto z-[-1] left-100 md:w-auto w-auto ml-0 pr-24 md:pl-0 pl-9  md:mr-10 mr-8 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-2000px]'}`}>
              <h1 className="text-3xl md:px-8 px-2 font-bold">About</h1>
              <div className="md:grid md:grid-cols-5 gap-2 md:px-12 px-0 py-4">                  
                  <div>
                    <span className="text-2xl">Institute</span>
                    <ul className="px-4 py-2">
                      <li className="pb-[3px]"><a href="" className="border-blue-400">About Us</a></li>
                      <li className="pb-[3px]"><a href="" className="hover:underline">History</a></li>
                      <li className="pb-[3px]"><a href="" className="hover:underline">Vision and Mision</a></li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-2xl">People</span>
                      <ul className="px-4 py-2">
                        <li className="pb-[3px]"><a href="" className="hover:underline">Scientist</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Academics</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Non Academics</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Volunteer</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Alumin</a></li>
                      </ul>
                    </div>
                  <div>
                  <span className="text-2xl">Leadership</span>
                      <ul className="px-4 py-2">
                        <li className="pb-[3px]"><a href="" className="hover:underline">Board of Govrnors</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Chairman</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Director</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Research Council</a></li>
                      </ul>
                  </div>
                  <div>
                  <span className="text-2xl">Society</span>
                      <ul className="px-4 py-2">
                        <li className="pb-[3px]"><a href="" className="hover:underline">Young Scientist Association</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Welfare</a></li>
                      </ul>
                  </div>
                  <div>
                  <span className="text-2xl">Administration</span>
                      <ul className="px-4 py-2">
                        <li className="pb-[3px]"><a href="" className="hover:underline">Accout Division</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Administration Division</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Computer Division</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Science Eduction and Dissemination Unit</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Instrument and Maintenance Division</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Internal Audit Division</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Office of Director</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Procurement and Laboratory Servies Division</a></li>
                      </ul>
                  </div>
                  <div className="md:mt-[-140px]">
                  <span className="text-2xl">Facilities</span>
                      <ul className="px-4 py-2">
                        <li className="pb-[3px]"><a href="" className="hover:underline">Research Center</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Library</a></li>
                        <li className="pb-[3px]"><a href="" className="hover:underline">Conference Facilities</a></li>
                      </ul>
                      <span className="text-2xl"><a href="">Life at NIFS</a></span>
                  </div>
                  <div className="md:mt-[-140px]">
                    
                    <h1 className="text-3xl md:px-0 px-2 font-bold"><a href="">News & Event</a></h1>
                  </div>
                  <div className="md:mt-[-145px]">     
                  <h1 className="text-3xl md:px-0 px-2 py-2 font-bold">Academic</h1>             
                    <span className="text-2xl"><a href="">Research</a></span><br />                    
                  </div>
                  <div className="md:mt-[-90px]">
                    <span className="text-2xl"><a href="">Study</a></span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default NavBar