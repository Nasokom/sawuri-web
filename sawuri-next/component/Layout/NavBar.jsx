import Image from 'next/image'
import React ,{useRef} from 'react'
import Menu from './Menu'
import { useStateContext } from '@/context/StateContext'

const NavBar = () => {

  const {showMenu, setShowMenu} = useStateContext();
  const nav = useRef(null);

  function toggleMenu(){
    if(showMenu){
      const menuElt = nav.current.querySelector('#menu') || elt.current;
      menuElt.style.background = "linear-gradient(90deg, rgba(29,121,9,1) 0%, rgba(190,198,28,1) 51%, rgba(179,10,10,1) 100%)";
      menuElt.style.transform = "translateY(-110%)"
      setTimeout(()=>{
        setShowMenu(false)
      },1000)
    }else{
      setShowMenu(!showMenu)
    }
  }

  return (
    <>
    <nav ref={nav}>
        <button id='burger-btn' onClick={()=>toggleMenu()}>
            <span></span>
            <span></span>
        </button>

        {/* <Image/> */}

        <button id='player'>
            
        </button>

        
      { showMenu ? <Menu toggleMenu={toggleMenu}/> : null}
    </nav>
    </>
  )
}

export default NavBar