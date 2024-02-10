import React from 'react'
import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      Hello Rushi {props.logoText}
      <Footer/>
    </div>
  )
}

export default Navbar
