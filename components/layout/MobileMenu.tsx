import { AlignLeft } from 'lucide-react'
import React from 'react'

const MobileMenu = () => {
  return (
    <button>
      <AlignLeft className="hover:text-dark-tan-sand transition-colors duration-280 ease-in-out md:hidden hover:cursor-pointer" size={18}/>
    </button>
  )
}

export default MobileMenu
