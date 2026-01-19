import React from 'react'
import MobileMenu from './MobileMenu';
import { AlignLeft } from 'lucide-react';
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-darkest-tan-sand/85 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        
    </div>
  )
}

export default SideMenu
