import { useState } from "react"
import SlLogo from "../assets/pngegg.png"
import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  return(

      <div className='py-4 px-4 md:flex'>
        <div>
          <img className='h-16' src={SlLogo} />
          <span className="px-2 py-4 text-2xl">NIFS</span>
        </div>
        <div className="text-3xl md:flex md:items-center">
          <IonIcon name="arrow-down-outline"/>
        </div>
      </div>

  )
}

export default NavBar