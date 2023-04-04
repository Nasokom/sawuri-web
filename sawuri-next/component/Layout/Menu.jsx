import React, {useEffect, useRef} from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

const Menu = ({toggleMenu}) => {

    const {setShowMenu, userLang} = useStateContext()
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
            {userLang.includes('fr') ? 'Acceuil' : userLang.includes('de')? 'Heim' : 'Home'}
        </Link>

        <Link href={'/about'} className="nav-link" onClick={()=>toggleMenu()}>
            {userLang.includes('fr') ? 'biographie' : userLang.includes('de')? 'Biografie' : 'Biography'}
        </Link>

        <Link href={'/media'} className="nav-link" onClick={()=>toggleMenu()}>
            Media
        </Link>
        <Link href={'/musiciens'} className="nav-link" onClick={()=>toggleMenu()}>
             {userLang.includes('fr') ? 'Les Musiciens' : userLang.includes('de')? 'Die Musiker' : 'The musicians'}
        </Link>
        <Link href={'/contact'} className="nav-link" onClick={()=>toggleMenu()}>
             {userLang.includes('fr') ? 'Contact' : userLang.includes('de')? 'Kontakt' : 'Contact'}
        </Link>

    </div>
  )
}

export default Menu