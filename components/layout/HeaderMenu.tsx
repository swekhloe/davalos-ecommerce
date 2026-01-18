"use client"
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
    const pathName = usePathname();
  return (
    <div className="hidden md:inline-flex px-8 items-center gap-7 font-semibold">
        {headerData?.map((item) => (
            <Link key={item.name} href={item.href} className="text-darker-tan-sand hover:text-dark-tan-sand transition-colors duration-280 ease-in-out relative group">
                {item.name}
                <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-dark-tan-sand group-hover:w-1/2 group-hover:right-0 group-hover:text-light-tan-sand transition-all duration-280 ease-in-out ${pathName === item?.href && "w-1/2"}`}/>
                <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-dark-tan-sand group-hover:w-1/2 group-hover:left-0 group-hover:text-light-tan-sand transition-all duration-280 ease-in-out ${pathName === item?.href && "w-1/2"}`}/>
            </Link>
        ))}
    </div>
  )
}

export default HeaderMenu
