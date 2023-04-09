import React from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

const Footer = () => {

  const {userLang } = useStateContext()

  return (
    <footer>
      <div id='footer-left'>
      <h2> 
        {userLang.includes('fr')? 'Pour naviguer facilement dans notre site ...' 
          : userLang.includes('de') ? 'Um einfach auf unserer Seite zu navigieren...' 
          :'To easily navigate our site...'}
        </h2>
      </div>

      <div id='footer-right'>
          <ul>
          <h3>Site Map</h3>
            <li>
              <Link href={'/'}>home</Link>
            </li>
            <li>
               <Link href={'/about'}>about</Link>
            </li>
            <li>
              <Link href={'/media'}>media</Link>
            </li>
            <li>
              <Link href={'/contact'}>contact</Link>
            </li>
            <li>
              <Link href={'/musiciens'}>musiciens</Link>
            </li>
          </ul>

          <ul>
            <h3>Policy</h3>
            <li> <Link href={'/'} >Data policy</Link></li>
            <li> <Link href={'/'} >terms of use</Link></li>
          </ul>
        </div>


      

          <p id="credit"> Website made by Nasoa 2023</p>

    </footer>
  )
}

export default Footer