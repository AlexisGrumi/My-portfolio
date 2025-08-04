import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

function Contact() {
    return (
        <div id='contact' className='w-full mb-12'>
            <div className='flex flex-row items-center gap-x-4 justify-between w-full'>
                <div className='flex flex-row items-center gap-x-4 w-full'>
                    <h1 className='text-3xl'><span className='text-[#C778DD]'>#</span>contact</h1>
                    <div className="w-1/5 border-t border-primary my-4" />
                </div>
            </div>
            <div className='w-full font-bold text-xl flex flex-row justify-between'>
                <div className='mt-12 max-w-[50%]'>
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </div>
                <div className='border p-4 flex flex-col gap-y-4 leading-none justify-between'>
                    <h1 className=''>Message me here</h1>
                    <span className='flex flex-row gap-x-2 leading-none font-normal'>
                        <FaLinkedin />  Alexis Grumi
                    </span>
                    <span className='flex flex-row gap-x-2 leading-none font-light'>
                        <GoMail /> al.grumiz@gmail.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Contact