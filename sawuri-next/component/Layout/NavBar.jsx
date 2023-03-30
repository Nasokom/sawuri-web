import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
        <button id='burger-btn'>
            <span></span>
            <span></span>
        </button>

        {/* <Image/> */}

        <button id='player'>
            
        </button>
    </nav>
  )
}

export default NavBar