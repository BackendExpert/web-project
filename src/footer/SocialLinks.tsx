import fb from '../assets/faceb.png'
import inster from '../assets/inster.png'
import linked from '../assets/linkedin.png'
import tx from '../assets/tx.png'
import yt from '../assets/yt.png'

const SocialLinks = () => {
  return (
    <ul className="flex flex-wrap justify-end sm:mb-0">
        <li className='pl-4'><a href="#"><img src={fb} alt="Facebook" /></a></li>
        <li className='pl-4'><a href="#"><img src={tx} alt="Tuiter" /></a></li>
        <li className='pl-4'><a href="#"><img src={inster} alt="Inster" /></a></li>
        <li className='pl-4'><a href="#"><img src={yt} alt="Youtube" /></a></li>    
        <li className='pl-4'><a href="#"><img src={linked} alt="linked" /></a></li>                         
    </ul>
  )
}

export default SocialLinks