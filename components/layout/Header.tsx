import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'

const Header = () => {
  return (
    <header className="w-full py-5 border-b border-dark-tan-sand">
        <Container className="text-nowrap flex items-center justify-between">
          <Logo/>
          <HeaderMenu/>
        <div className="w-autoflex md:w-1/3 flex justify-end items-center space-x-4">
          <SearchBar/>
          <FavoriteButton/>
          <CartIcon/>
        </div>
          {/*User Account*/}
        </Container>
        
    </header>
  )
}

export default Header
