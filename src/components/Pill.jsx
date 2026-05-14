import React from 'react'

export default function Pill({ icon, name, position, color }) {
  return (
    <div className={`absolute
        flex items-center
        gap-2
        ${position}
        px-4 py-2
        rounded-full
        bg-[#111113]/80
        backdrop-blur-xl
        z-30
        border border-zinc-800
        text-sm
        ${color}
        shadow-[0_0_30px_rgba(139,92,246,0.08)]
        transition-all duration-300
        hover:border-violet-500/40
        hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]`}>
      {icon}
      {name}
    </div>
  )
}