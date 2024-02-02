import LogoSl from '../assets/pngegg.png'
import FooterM from './FooterM'



const Footer = () => {
    return (      
        
        <footer className="bg-sky-900 text-white">
            <div className="container mx-auto h-auto px-8 py-8">
                <div className="mx-auto w-full max-w-screen-xl">
                <FooterM />
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

                    </div>
                <p className="text-center text-xs">&copy; National Institute of Fundamental Studies. Hanthana Road, Kandy, Sri Lanka</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;