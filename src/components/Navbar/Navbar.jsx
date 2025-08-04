import React from 'react'
import LogoAGZ from '../../assets/LogoAGZ.png'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
    return (
        <div className='flex flex-row w-full fixed top-0 left-0 z-50 text-[0.9vw] h-fit bg-transparent'>
            <div className='flex flex-col ml-2 items-center gap-y-2'>
                <div className='border-l-2 h-56 border-[#ABB2BF]' />
                <div className='flex flex-col gap-y-4 items-center'>
                    <a
                        href="https://github.com/AlexisGrumi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub
                            className="w-[30px] min-w-[30px] max-w-[30px] h-auto text-current hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/alexis-grumi"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin
                            className="w-[30px] min-w-[30px] max-w-[30px] h-auto text-current hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"
                        />
                    </a>

                    {/* <a
                        href="https://discord.gg/tu-invitacion"  // O tu perfil si usas url directa
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Discord"
                    >
                        <FaDiscord
                            className="w-[30px] min-w-[30px] max-w-[30px] h-auto text-current hover:text-white transition-colors duration-300 ease-in-out cursor-pointer"
                        />
                    </a> */}


                </div>
            </div>
            <nav className='flex flex-row justify-between w-full mx-12 mt-4 h-fit'>
                <span className='font-semibold flex flex-row items-center'>
                    <img src={LogoAGZ} className='max-w-[70px]' />
                    <h1>
                        Alexis
                    </h1>
                </span>
                <div className='flex flex-row gap-x-8 font-medium h-fit'>
                    <a href="#home" className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>home</a>
                    <a href='#projects' className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>works</a>
                    <a href='#aboutme' className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>about-me</a>
                    <a href='#contact' className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>contacts</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar