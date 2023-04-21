import React from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'
import ThemeBtn from '../Ui/ThemeBtn'
import LangueBtn from '../Ui/LangueBtn'

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
            <li>
              <h3>Site Map</h3>
            </li>
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
            <li>
              <h3>Policy</h3>
            </li>
            <li> <Link href={'/policy#data'} >Data policy</Link></li>
            <li> <Link href={'/policy#terms'} >terms of use</Link></li>
            <li> <Link href={'/policy#cookie'} >cookies</Link></li>
          </ul>

          <ul>
            <li>
              <h3>Settings</h3>
            </li>
            <li> <LangueBtn/></li>
            <li><ThemeBtn/></li>
          
          </ul>

        
        </div>      

          <p id="credit"> Website made by Nasoa 2023</p>

    </footer>
  )
}

export default Footer