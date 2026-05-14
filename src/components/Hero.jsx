import React from 'react'
import GradientButton from './GradientButton'
import Button from './Button'
import { MoveUpRight, Mail } from 'lucide-react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import NextRoleDashboard from './../assets/NextRoleDashboard.png'
import NextRoleRoles from './../assets/NextRoleRoles.png'
import { SiReact, SiTailwindcss, SiFirebase, SiJavascript} from "react-icons/si";
import Pill from './Pill'

export default function Hero() {
  const techStack = [
    { icon: <SiReact size={18} />, name: "React", position: "top-[5%] right-[2%]", color: "text-cyan-400" },
    { icon: <SiTailwindcss size={18} />, name: "Tailwind CSS", position: "top-[60%] right-[-6%]", color: "text-sky-400" },
    { icon: <SiJavascript size={18} />, name: "JavaScript", position: "top-[12%] left-[8%]", color: "text-yellow-400" },
    { icon: <SiFirebase size={18} />, name: "Firebase", position: "bottom-[12%] left-[-6%]", color: "text-orange-400" },
  ];

  const socials = [
    { icon: <FaGithub size={18} />, link: "https://github.com/kushagrakaushik" },
    { icon: <FaLinkedinIn size={18} />, link: "https://www.linkedin.com/in/kushagrakaushik/" },
    { icon: <FiInstagram size={18} />, link: "https://www.instagram.com/kushagrakaushik30/" },
  ];
  const moveToProjects = () => {
    // To DO: complete the function to scroll to projects section
  }
  return (
    <div id="home" className="h-fit pt-28 flex items-center gap-20 justify-center px-4 lg:px-8">
      {/* left side */}
      <div className="flex-1 flex max-w-100 flex-col items-start gap-2 justify-center">
        {/* stat */}
        <p className="px-4 py-2
          rounded-full
          uppercase
          border border-zinc-800
          bg-[#111113]/60
          text-[8px]
          tracking-[0.2em]
          text-zinc-400
          backdrop-blur-lg"
          >
          Frontend Developer • Builder • Learner
        </p>

        <h1
        className='text-6xl lg:text-7xl
          leading-[0.95]
          text-white
          tracking-tighter
          mb-4'
        >
           Kushagra<br></br> <span className="text-violet-500">Kaushik</span>
        </h1>
        
        <p
        className='text-lg
          leading-8
        text-zinc-400
          max-w-xl'
        >
          I build interactive products and
          modern web experiences focused
          on clean design and usability.
        </p>


        <div className="
        flex items-center
        gap-6
        mt-4">
          <GradientButton Icon={MoveUpRight} text="View My Work" btnFunction={moveToProjects}/>

          <Button Icon={Mail} text="Get In Touch" iconColor='violet-500'/>
        </div>

        {/* Socials */}

        <div className="flex items-center gap-4 mt-6 text-zinc-500 text-[14px]">
          <p>Find Me On</p>

          {socials.map((social, index) => {
            return (
              <span key={index} className="w-10 h-10

                rounded-full
              bg-[#111113]
                flex items-center justify-center
              text-zinc-400
              hover:text-white
              hover:border-violet-500/40
                transition-all duration-300
                cursor-pointer"
              onClick={() => window.open(social.link, "_blank")}>
                {social.icon}
              </span>
            )
          })}

        </div>


      </div>

      {/* right side */}

      <div className='flex-1 scale-[0.92] relative flex
      items-center justify-center bg-black/20
      backdrop-blur-[2px]'>
        {/* bg glow */}
        <div className="
          z-0
          absolute
          w-125
          h-125
          rounded-full
          bg-violet-500/20
          blur-[120px]
          opacity-70
          "/>
        
        <img src={NextRoleDashboard}
          className="
            hover:scale-[1.01]
            transition-all duration-500
            opacity-90
            hover:rotate-0
            z-10
            relative
            w-150
            rounded-[28px]
            border border-zinc-800
            shadow-[0_0_60px_rgba(139,92,246,0.15)]
            -rotate-2
            object-cover
            "/>

        <img src={NextRoleRoles}
          className="
            hover:scale-[1.01]
            hover:rotate-0
            transition-all duration-500
            absolute
            z-20
            -bottom-10
            -left-10
            w-100
            rounded-2xl
            border border-zinc-800
            shadow-[0_0_40px_rgba(139,92,246,0.1)]
            rotate-6
            opacity-90
          "/>

        {/* tech stack */}
        {techStack.map((tech, index) => {
          return (
            <Pill key={index} icon={tech.icon} name={tech.name} position={tech.position} color={tech.color} />
          )
        })}

      </div>

    </div>
  )
}