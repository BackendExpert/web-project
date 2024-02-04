import SlLogo from "../assets/pngegg.png"


const NavBar = () => {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-blue-900">
      <div className="container mx-auto h-auto px-10 py-4">
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