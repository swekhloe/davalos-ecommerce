import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <Search className="hover:text-dark-tan-sand transition-colors duration-280 ease-in-out" size={18}/>
      {/* <input type="text" placeholder="Search products..." className="ml-2 px-2 py-1 border border-dark-tan-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dark-tan-sand focus:border-transparent"/> */}
    </div>
  )
}

export default SearchBar
