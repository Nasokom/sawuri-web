import Image from 'next/image'
import React ,{useRef,useEffect,useState} from 'react'
import Menu from './Menu'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

const NavBar = () => {

  const {showMenu, setShowMenu} = useStateContext();
  const [isHome, setIsHome] = useState('')
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

  useEffect(()=>{
    //console.log(window.location.href)
    //setIsHome(window.location.pathnames);
    const regex = /[^/]*$/;
    const extractedString = window.location.href.match(regex)[0];
    setIsHome(extractedString)
    //console.log(isHome)
  })

  return (
    <>
    <nav ref={nav}>
      <Link href={'/'} >
        <button id='logo' className={isHome.length <= 1 &&'invisible-logo'}>
          <div>Marcel</div>
          <div>Sawuri</div>
        </button>
      </Link>

        <button id='burger-btn' onClick={()=>toggleMenu()}>
            <span className={showMenu ? 'menu-btn-active menu-btn' : 'menu-btn' }>{showMenu ? 'CLOSE':'MENU'}</span>
        </button>


        
      { showMenu ? <Menu toggleMenu={toggleMenu}/> : null}
    </nav>
    </>
  )
}

export default NavBar