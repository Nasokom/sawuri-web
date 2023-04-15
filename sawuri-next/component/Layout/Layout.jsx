import React, { Suspense } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import CookiePolicy from './CookiePolicy'
import { Loading } from './Loading'

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
      <Suspense fallback={<Loading/>}>
        <main>
        {children}
        </main>
    </Suspense>
    <CookiePolicy/>
    <Footer/>
    </>
  )
}

export default Layout