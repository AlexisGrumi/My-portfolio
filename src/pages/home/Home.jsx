import React from 'react'
import me from '../../assets/Person.png'
import me2 from '../../assets/Person2.png'
import Projects from '../../components/Projects/Projects'
import SkillsList from '../../components/Skills/SkillsList'
import image from '../../assets/LinesDot.svg'

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-y-20 w-full justify-items-center'>
      <div id='Hero' className='w-full font-bold text-xl flex flex-row mt-24 justify-between items-center'>
        <div className='mt-16'>
          <h1>
            Hi! I'm Alexis Grumi, a <span className='text-[#C778DD]'>
              Software Engineer
            </span> with <span className='text-[#C778DD]'>
              4+ years of experience.
            </span>
          </h1>
          <h2 className="font-thin my-6 w-11/12">
            I craft digital experiences where creativity and technology converge.
          </h2>
          <button className='border-2 border-[#C778DD] px-4 py-2 hover:bg-[rgba(199,120,221,0.2)] transition-colors duration-300 ease-in-out'>Contact me!!</button>
        </div>
        <div className='w-fit bg-lines bg-no-repeat bg-[position:0px_60px] bg-[size:180px_140px] flex flex-col'>
          <img className='max-w-[387px]' src={me} alt="Me" />
          <div className='border p-2 flex flex-row text-xg gap-x-2 items-center max-w-[387px]'>
            <div className='p-2 bg-[#C778DD] my-2' />
            I recently worked at Fixlabs.
          </div>
        </div>
      </div>

      <div id='Quote' className="relative w-7/12 border border-white p-6 mt-4">
        <span className="absolute -top-5 left-[11px] bg-[#282C33] px-2 text-white text-sm">
          ,,
        </span>
        If something can go wrong, it will go wrong
        <div className='absolute w-4/12 bg-[#282C33] -right-0 top-full border border-white p-2'>
          - Murphy´s 3rd Law
        </div>
        <span className="absolute -bottom-2 right-[11px] bg-[#282C33] px-2 text-white text-sm">
          ,,
        </span>
      </div>

      <Projects id='Projects' />

      <div id='Skills' className="w-full flex flex-col justify-between items-start gap-8">
        <div className='flex flex-row items-center gap-x-4 justify-between w-full'>
          <div className='flex flex-row items-center gap-x-4 w-full'>
            <h1 className='text-3xl'><span className='text-[#C778DD]'>#</span>skills</h1>
            <div className="w-1/5 border-t border-primary my-4" />
          </div>
        </div>
        <div className='flex flex-row'>
          <div className="w-[400px] flex-shrink-0">
            <img src={image} alt="Decoration" className="h-auto" />
          </div>
          <SkillsList />
        </div>
      </div>

      <div className='w-full'>
        <div className='flex flex-row items-center gap-x-4 justify-between w-full'>
          <div className='flex flex-row items-center gap-x-4 w-full'>
            <h1 className='text-3xl'><span className='text-[#C778DD]'>#</span>about-me</h1>
            <div className="w-2/5 border-t border-primary my-4" />
          </div>
        </div>
        <div className='w-full font-bold text-xl flex flex-row justify-between'>
          <div className='mt-8'>
            <h1>
              Hello, i’m Elias!

            </h1>
            <button className='border-2 border-[#C778DD] px-4 py-2 hover:bg-[rgba(199,120,221,0.2)] transition-colors duration-300 ease-in-out'>Contact me!!</button>
          </div>
          <div className='w-fit bg-dots bg-no-repeat bg-[position:0px_60px] bg-[size:180px_140px]'>
            <img className='max-w-[287px]' src={me2} alt="Me" />
          </div>
        </div>
      </div>
    </div>
  )
}
