import SlLogo from "../assets/pngegg.png"


const NavBar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3x1 text-indigo-600">
            <img src={SlLogo} alt="" className="h-8 w-8"/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavBar