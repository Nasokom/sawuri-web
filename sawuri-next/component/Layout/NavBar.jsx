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
      menuElt.style.background = "var(--rasta-bg)";
      menuElt.style.transform = "translateY(-110%)"
      setTimeout(()=>{
        setShowMenu(false)
      },550)
    }else{
      setShowMenu(!showMenu)
    }
  }

  return (
    <>
    <nav ref={nav}>
        <button id='logo'>
            
        </button>


        <button id='burger-btn' onClick={()=>toggleMenu()}>
            <span className={showMenu ? 'menu-btn-active menu-btn' : 'menu-btn' }>{showMenu ? 'CLOSE':'MENU'}</span>
        </button>

      


        
      { showMenu ? <Menu toggleMenu={toggleMenu}/> : null}
    </nav>
    </>
  )
}

export default NavBar