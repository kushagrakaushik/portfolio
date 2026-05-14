import React from 'react'
import { Moon, Sun, Download, Paintbrush } from 'lucide-react'

export default function Navbar({ theme, setTheme }) {
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
    justify-between px-8 lg:px-16
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
      <div className="flex flex-1 justify-end items-center gap-8">

      <button
        className="
        w-11 h-11 rounded-full
        bg-[#111113]/80 backdrop-blur-xl
        border border-zinc-800
        flex items-center justify-center
      text-zinc-300
        transition-all duration-300
      hover:bg-[#18181B]
      hover:border-violet-500/40
      hover:text-white cursor-pointer
       "
       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
       >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>

  <button
    className="
      px-5 py-2
      rounded-2xl
      bg-linear-to-r
      from-violet-500
      to-violet-600
      text-white
      text-md
      font-medium
      flex items-center
      gap-3
      shadow-[0_0_40px_rgba(139,92,246,0.35)]
      transition-all duration-300
      hover:scale-[1.02]
      hover:shadow-[0_0_55px_rgba(139,92,246,0.5)]
    "
  >
    Resume
    <Download size={18} />
  </button>

</div>

    </nav>
  )
}