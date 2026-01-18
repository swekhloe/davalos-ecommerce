import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import LoginButton from './LoginButton'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className="py-5 border-b border-dark-tan-sand">
        <Container className="flex items-center justify-between">
          <div className="w-auto flex items-center justify-start space-x-4">
            <MobileMenu/>
            <Logo/>
          </div>
          <HeaderMenu/>
          <div className="hidden sm:inline-flex w-auto pl-8 justify-end items-center gap-1 space-x-4">
            <SearchBar/>
            <FavoriteButton/>
            <CartIcon/>
            <LoginButton/>
          </div>
          {/*User Account*/}
        </Container>
        
    </header>
  )
}

export default Header
