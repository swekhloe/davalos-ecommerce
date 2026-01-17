import React from 'react'
import Container from './Container'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="w-full py-5">
        <Container >
          <Logo/>
          {/*Navigation Links*/}
          {/*User Account and Cart Icons*/}
          {/* You can replace the below with actual icons and links */}
        </Container>
        
    </header>
  )
}

export default Header
