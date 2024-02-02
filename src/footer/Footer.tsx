import LogoSl from '../assets/pngegg.png'
import fb from '../assets/faceb.png'
import inster from '../assets/inster.png'
import linked from '../assets/linkedin.png'
import tx from '../assets/tx.png'
import yt from '../assets/yt.png'

const Footer = () => {
    return (      

        <footer className="bg-sky-900 text-white">
            <div className="container mx-auto h-auto px-8 py-8">
                <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-4">
                    <div>
                        Hi 
                    </div>
                    <div>
                        Hi 
                    </div>
                    <div>
                        Hi 
                    </div>
                    <div>
                        Hi 
                    </div>
                </div>
                    <div className="px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                        <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={LogoSl} className="h-16" alt="SlLogo" />
                            <div className="pl-2 text-xs">
                                <ul>
                                    <li>National Institute of Fundamental Studies.</li>
                                    <li>Ministry of Education</li>
                                </ul>
                            </div>
                        </div>
                        <ul className="flex flex-wrap justify-end sm:mb-0">
                            <li className='pl-4'><img src={fb} alt="Facebook" /></li>
                            <li className='pl-4'><img src={tx} alt="Tuiter" /></li>
                            <li className='pl-4'><img src={inster} alt="Inster" /></li>
                            <li className='pl-4'><img src={yt} alt="Youtube" /></li>    
                            <li className='pl-4'><img src={linked} alt="linked" /></li>                         
                        </ul>
                    </div>
                <p className="text-center text-xs">&copy; National Institute of Fundamental Studies. Hanthana Road, Kandy, Sri Lanka</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;