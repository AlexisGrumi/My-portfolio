import React from 'react'

function Projects() {
    return (
        <div className='w-full flex justify-center'>
            <div className='flex flex-row items-center gap-x-4 justify-between w-full '>
                <div className='flex flex-row items-center gap-x-4'>
                    <h1 className='text-3xl'><span>#</span>projects</h1>
                    <div className='border-t-2 w-56 border-primary' />
                </div>
                <div>ViewAll</div>
            </div>
        </div>
    )
}

export default Projects