import Image from 'next/image'
import React from 'react'
import Menu from './Menu'
import { useStateContext } from '@/context/StateContext'

const NavBar = () => {

  const {showMenu, setShowMenu} = useStateContext();
  return (
    <>
    <nav>
        <button id='burger-btn' onClick={()=>setShowMenu(!showMenu)}>
            <span></span>
            <span></span>
        </button>

        {/* <Image/> */}

        <button id='player'>
            
        </button>

        
    </nav>
    </>
  )
}

export default NavBar