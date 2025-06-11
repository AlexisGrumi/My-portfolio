import React from 'react'
import Cards from '../Cards/Cards'

function Projects() {
    return (
        <div className='w-full flex flex-col gap-y-4 gap-x-2 justify-center gap-y-12'>
            <div className='flex flex-row items-center gap-x-4 justify-between w-full'>
                <div className='flex flex-row items-center gap-x-4 w-full'>
                    <h1 className='text-3xl'><span className='text-[#C778DD]'>#</span>projects</h1>
                    <div className="w-3/5 border-t border-primary my-4" />
                </div>
                <div className='w-fit text-nowrap'>
                    ViewAll {"->"}
                </div>
            </div>
            <Cards
                imageSrc="/project-thumb.png"
                imageAlt="ChertNodes Screenshot"
                technologies={['HTML', 'SCSS', 'Python', 'Flask']}
                title="ChertNodes"
                description="Minecraft servers hosting"
                liveUrl="https://live.example.com"
                cachedUrl="https://cached.example.com"
            />
        </div>
    )
}

export default Projects