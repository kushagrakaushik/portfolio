import React from 'react'
import { Moon, Sun, Download, Paintbrush } from 'lucide-react'
import GradientButton from './GradientButton';
import Button from './Button';

export default function Navbar({ theme, setTheme }) {
  const downloadResume = () => {
    // TO DO: complete the function to download resume
  }

  const tabs = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]
  return (
    <nav className='w-full h-18 dark:bg-[#111113]/10
    fixed top-0 left-0 flex items-center
    justify-between px-4 lg:px-8
    backdrop-blur-xl border-b border-white/5 
    shadow-[0_8px_30px_rgb(0,0,0,0.25)]'>
      <div className="flex-1">
        <h1 className='text-3xl font-bold text-violet-500
        transition-all duration-300
        hover:text-violet-400 cursor-pointer'>K</h1>
      </div>
      {/* { nav Links } */}
      <div className="flex flex-1 items-center justify-center gap-10">
        {tabs.map((tab, index) => {
          return (
            <div key={tab.name} className='relative'>
              <div className='relative inline-block 
              after:content-[""] after:absolute 
              after:left-1/2 after:-translate-x-1/2 
              after:-bottom-2 after:h-0.5 after:w-0 
              after:bg-violet-500 after:transition-all 
              after:duration-300 hover:after:w-full'>
                <a
                  href={tab.href}
                  className='w-fit text-sm font-medium text-zinc-400 transition-all duration-300 dark:hover:text-white'
                >
                  {tab.name}
                </a>
              </div>
            </div>
          );
        })}
      </div>

        {/* {right buttons} */}
      <div className="flex flex-1 justify-end items-center gap-4">

      <Button Icon={theme === "dark" ? Sun: Moon}
      btnFunction={() => setTheme(theme === "dark" ? "light" : "dark")} />

    <GradientButton Icon={Download} text="Resume"
    btnFunction ={downloadResume} />

</div>

    </nav>
  )
}