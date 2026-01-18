import { HeartIcon} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
    <div>
        <Link href="/favorites" className="relative group">
            <HeartIcon className="hover:text-dark-tan-sand transition-colors duration-280 ease-in-out" size={18}/>
            <span className="absolute -top-2 -right-2 rounded-full bg-light-tan-sand text-black text-xs w-3.5 h-3.5 flex items-center justify-center group-hover:scale-120 transition-transform duration-300">0</span>
        </Link>
    </div>
  )
}

export default FavoriteButton
