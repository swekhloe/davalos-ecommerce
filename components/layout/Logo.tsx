import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className}: {className?: string}) => {
  return (
    <Link href="/" className={cn("text-2xl font-bold text-gray-800", className)}>
      <h2>
        <span>Davalos</span> Clothing
      </h2>
    </Link>
  )
}

export default Logo
