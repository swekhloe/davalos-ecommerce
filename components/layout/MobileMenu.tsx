"use client"
import { AlignLeft } from 'lucide-react'
import React from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <button onClick={toggleMenu} className="md:hidden">
      <AlignLeft className="hover:text-dark-tan-sand transition-colors duration-280 ease-in-out md:hidden hover:cursor-pointer" size={18} />
    </button>
    <SideMenu isOpen={isOpen} onClose={toggleMenu}/>
    </>  
  )
}

export default MobileMenu
