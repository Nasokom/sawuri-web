import React, { useState, useEffect} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import CookiePolicy from './CookiePolicy'
import { Loading } from './Loading'

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
        <main>
        { isLoading ? <Loading/> : children}
        </main>
    {/* <CookiePolicy/> */}
    <Footer/>
    </>
  )
}

export default Layout