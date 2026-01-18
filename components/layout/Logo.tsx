import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}: {className?: string}) => {
  return (
    <Link href="/">
      <h2 className={cn(
        "text-nowrap text-2xl font-bold text-darker-tan-sand tracking-widest uppercase font-serif hover:text-dark-tan-sand transition-colors duration-280 ease-in-out",
         className
        )}>
        <span>Davalos</span> Clothing
      </h2>
    </Link>
  )
}

export default Logo
