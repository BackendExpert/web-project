import SLlogo from '../assets/pngegg.png'

const NavBar = () => {
  return(
    <div className='py-4 px-4 md:flex'>
      <img className='h-16' src={SLlogo} />
      <span className="px-2 py-4 text-2xl">NIFS</span>
    </div>
  )
}

export default NavBar