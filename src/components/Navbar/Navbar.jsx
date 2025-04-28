import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col ml-2'>
                <div className='border-l-2 h-24 ml-1 border-black' />
                <h1>g</h1>
                <h1>w</h1>
                <h1>f</h1>
            </div>
            <nav className='flex flex-row justify-between w-full mx-12'>
                Alexis
                <ul className='flex flex-row gap-x-8'>
                    <li><span className='text-[#C778DD]'>#</span>home</li>
                    <li><span className='text-[#C778DD]'>#</span>works</li>
                    <li><span className='text-[#C778DD]'>#</span>about-me</li>
                    <li><span className='text-[#C778DD]'>#</span>contacts</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar