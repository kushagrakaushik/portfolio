import React from 'react'
import { Download } from 'lucide-react'

export default function GradientButton({ Icon , text, btnFunction}) {
  return (
    <button
    className="
      px-2 py-2
      rounded-2xl
      bg-linear-to-r
      from-violet-500
      to-violet-600
      text-white
      text-md
      font-medium
      flex items-center
      gap-2
      shadow-[0_0_40px_rgba(139,92,246,0.35)]
      transition-all duration-300
      hover:scale-[1.02]
      hover:shadow-[0_0_55px_rgba(139,92,246,0.5)]
      cursor-pointer
    "
    onClick={btnFunction}
  >
    {text}
    {Icon && <Icon size={18} />}
  </button>
  )
}