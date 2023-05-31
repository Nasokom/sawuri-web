import React, { useState, useEffect} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import CookiePolicy from './CookiePolicy'
import { Loading } from './Loading'
import News from '../content/News'
import Actus from '../content/Actus'
const Layout = ({children}) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{

    setTimeout(()=>{
      setIsLoading(false)
    }, 2000)

  },[])

  return (
    <>
    <NavBar/>
   {/*  <Actus/> */}
        <main>
        { isLoading ? <Loading/> : children}
        </main>
    {/* <CookiePolicy/> */}
    <Footer/>
    </>
  )
}

export default Layout