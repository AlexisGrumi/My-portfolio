import React from 'react'
import gh from '../../assets/icons/Github.svg'
import li from '../../assets/icons/LinkedIn.svg'
import ds from '../../assets/icons/Discord.svg'

function Navbar() {
    return (
        <div className='flex flex-row w-full absolute z-50 text-[0.9vw] h-fit'>
            <div className='flex flex-col ml-2 items-center gap-y-2'>
                <div className='border-l-2 h-56 border-[#ABB2BF]' />
                <div className='flex flex-col gap-y-4 items-center'>
                    <img src={gh} className='w-[2vw] h-auto hover:cursor-pointer' />
                    <img src={li} className='w-[2vw] h-auto hover:cursor-pointer' />
                    <img src={ds} className='w-[2vw] h-auto hover:cursor-pointer' />
                </div>
            </div>
            <nav className='flex flex-row justify-between w-full mx-12 mt-4 h-fit'>
                <h1 className='font-semibold'>
                    Alexis
                </h1>
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