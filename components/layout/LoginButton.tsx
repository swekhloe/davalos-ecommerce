import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
  return (
    <Link href="/login" className="hover:text-dark-tan-sand transition-colors duration-280 ease-in-out">
      Login
    </Link>
  )
}

export default LoginButton
