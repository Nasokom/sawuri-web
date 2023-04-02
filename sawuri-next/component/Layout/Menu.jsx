import React, {useEffect, useRef} from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

const Menu = ({toggleMenu}) => {

    const {setShowMenu} = useStateContext()
    const menu = useRef(null)

    useEffect(()=>{

        document.documentElement.style.overflow = "hidden"
        return ()=>{
            document.documentElement.style.overflow = "auto"
        }

    },[])

  return (
    <div id='menu' ref={menu}>

        <Link href={'/'} className="nav-link" onClick={()=>toggleMenu()}>
            Home
        </Link>

        <Link href={'/about'} className="nav-link" onClick={()=>toggleMenu()}>
            Biographie
        </Link>

        <Link href={'/media'} className="nav-link" onClick={()=>toggleMenu()}>
            Media
        </Link>
        <Link href={'/musiciens'} className="nav-link" onClick={()=>toggleMenu()}>
            Collaborateur
        </Link>
        <Link href={'/contact'} className="nav-link" onClick={()=>toggleMenu()}>
            Contact
        </Link>

    </div>
  )
}

export default Menu