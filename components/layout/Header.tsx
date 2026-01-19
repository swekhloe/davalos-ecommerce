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
    <div className="py-5 bg-white border-dark-tan-sand">
        <Container className="flex items-center justify-between">
          <div className="w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0">
            <MobileMenu/>
            <Logo/>
          </div>
          <HeaderMenu/>
          <div className="w-auto md:w-1/3 flex justify-end items-center pl-8 gap-4">
            <SearchBar/>
            <FavoriteButton/>
            <CartIcon/>
            <LoginButton/>
          </div>
          {/*User Account*/}
        </Container>
        
    </div>
  )
}

export default Header
