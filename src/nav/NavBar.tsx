import SlLogo from "../assets/pngegg.png"


const NavBar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-blue-900">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
          <span className="text-3x1 text-indigo-600">
            <img src={SlLogo} alt="" className="h-8 w-8"/>
          </span>
          </div>
          <ul className="md:flex md-item-center text-2xl text-white">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        

      </div>
    </div>
  )
}

export default NavBar