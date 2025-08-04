import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import LogoAGZ from '../../assets/LogoAGZ.png'
const Footer = () => {
    return (
        <footer className="bg-[#282c34] text-white px-10 py-8 border-t border-gray-600">
            <div className="flex justify-between items-start flex-wrap gap-8">
                {/* Sección izquierda */}
                <div className="space-y-2">
                    <div className="flex items-center gap-x-12 leading-none ">
                        <span className="font-bold flex flex-row items-center">
                            <img src={LogoAGZ} className='max-w-[90px] ' />
                            <h1>
                                Alexis
                            </h1>
                        </span>
                        <span className="text-gray-400">al.grumiz@gmail.com</span>
                    </div>
                    <p className="text-sm text-gray-300">
                        Fullstack Senior and Software Engineer
                    </p>
                </div>

                {/* Sección derecha */}
                <div className="text-right">
                    <div className="flex gap-4 justify-end">
                        <FaGithub className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" />
                        <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" />
                        <FaDiscord className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Línea inferior */}
            <div className="text-center mt-8 text-sm text-gray-400">
                © Copyright 2025. Made by Alexis Grumi
            </div>
        </footer>
    );
};

export default Footer;
