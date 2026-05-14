import React from 'react'

export default function Button({ Icon, text, btnFunction, iconColor="zinc-300" }) {
  return (
    <button
        className={`
        px-2 py-2
        gap-2
        text-md
        font-medium
        min-w-11 min-h-11 rounded-2xl
        bg-[#111113]/80 backdrop-blur-xl
        border border-zinc-800
        flex items-center justify-center
        text-zinc-300
        transition-all duration-300
      hover:bg-[#18181B]
      hover:border-violet-500/40
      hover:text-white cursor-pointer
        `}
       onClick={btnFunction}
       >
        {text}
        <span className={`text-${iconColor}`}>
          {Icon && <Icon size={18} />}
        </span>
      </button>
  )
}