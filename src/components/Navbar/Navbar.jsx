import React from 'react'
import LogoAGZ from '../../assets/LogoAGZ.png'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
    return (
        <div className='flex flex-row w-full fixed top-0 left-0 z-50 text-[0.9vw] h-fit bg-transparent'>
            <div className='flex flex-col ml-2 items-center gap-y-2'>
                <div className='border-l-2 h-56 border-[#ABB2BF]' />
                <div className='flex flex-col gap-y-4 items-center'>
                    <FaGithub className="w-[30px] min-w-[30px] max-w-[30px] h-auto text-current hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" />
                    <FaLinkedin className="w-[30px] min-w-[30px] max-w-[30px] h-auto text-current hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" />
                    <FaDiscord className="w-[30px] min-w-[30px] max-w-[30px] h-auto text-current hover:text-white transition-colors duration-300 ease-in-out cursor-pointer" />

                </div>
            </div>
            <nav className='flex flex-row justify-between w-full mx-12 mt-4 h-fit'>
                <span className='font-semibold flex flex-row items-center'>
                    <img src={LogoAGZ} className='max-w-[70px]'/>
                    <h1>
                        Alexis
                    </h1>
                </span>
                <ul className='flex flex-row gap-x-8 font-medium h-fit'>
                    <li className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>home</li>
                    <li className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>works</li>
                    <li className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>about-me</li>
                    <li className='hover:font-bold h-fit hover:cursor-pointer'><span className='text-[#C778DD]'>#</span>contacts</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar