import Image from 'next/image'
import React ,{useRef,useEffect,useState} from 'react'
import Menu from './Menu'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'
import News from '../content/News'

const NavBar = () => {

  const {showMenu, setShowMenu} = useStateContext();
  const [isHome, setIsHome] = useState('');// to hide/show logo only on home
  const nav = useRef(null);


  function toggleMenu(){
    if(showMenu){
      const menuElt = nav.current.querySelector('#menu') || elt.current;
      menuElt.style.background = "var(--rasta-bg)";
      menuElt.style.transform = "translateY(-110%)";
      nav.current.querySelector('.menu-text').style.top = "0%"
      setTimeout(()=>{
        setShowMenu(false)
      },550)
    }else{
      nav.current.querySelector('.menu-text').style.top = "-100%"
      setShowMenu(!showMenu)
    }

  }

  useEffect(()=>{
    const regex = /[^/]*$/;
    const extractedString = window.location.href.match(regex)[0];
    setIsHome(extractedString)
  })

  return (
    <>
      <nav ref={nav}>
        <News/>
        <div id="nav">
          <Link href={'/'} >
            <button id='logo' aria-label='home' className={isHome.length <= 1 ?'invisible-logo' : ''}>
              <div>Marcel</div>
              <div>Sawuri</div>
            </button>
          </Link>

            <button id='burger-btn' aria-label="menu" onClick={()=>toggleMenu()}>
              <span className={showMenu ? 'menu-btn-active menu-btn' : 'menu-btn' }>{showMenu ? 'CLOSE':'MENU'}</span> 
              <div className='menu-text'> 
                <div>MENU</div>
                <div>CLOSE</div>
              </div>
            </button>  
          { showMenu ? <Menu toggleMenu={toggleMenu}/> : null}
        </div>

      </nav>
    </>
  )
}

export default NavBar