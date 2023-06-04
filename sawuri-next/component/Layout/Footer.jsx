import React from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'
import ThemeBtn from '../Ui/ThemeBtn'
import LangueBtn from '../Ui/LangueBtn'

const Footer = () => {

  const {userLang } = useStateContext()
  

  return (
  <footer>

      <span id='line'></span>
      <div className='footer-container'>

        <div className='content-box'>

          <h4>Menu</h4>
          <p>
          {userLang.includes('fr') ? 'Pour naviguer facilement sur notre site web' 
          : userLang.includes('de') ? 'Zur einfachen Navigation auf unserer Website'
          : 'To easily navigate our website' }
          </p>
            <ul>
              <li><Link href={'/'}>Home</Link></li>
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/musiciens'}>Musiciens</Link></li>
              <li><Link href={'/media'}>Media</Link></li>
              <li><Link href={'/contact'}>Contact</Link></li>
            </ul>
          </div>

          <div className='content-box'>

            <h4>Policy</h4>
            <p>          
            {userLang.includes('fr') ? 'Retrouver les infos legales' 
            :userLang.includes('de') ? 'Rechtliche Hinweise finden'
            :'Find legal information' }
              </p>
            <ul>
              <li><Link href={'/policy#terms'}>
                {userLang.includes('fr') ? "Conditions d'utlitisation"
                :userLang.includes('de') ? 'Nutzungsbedingungen'
                :'Terms of use' }
              </Link></li>
              <li><Link href={'/policy#data'}>
              {userLang.includes('fr') ? "Politique de données"
                :userLang.includes('de') ? 'Datenrichtlinie'
                :'Data policy' }
              </Link></li>
                <li><Link href={'/policy#cookie'}>Cookie</Link></li>
            </ul>
          </div>

        <div className='content-box'>
          <span></span>
          <h4>Settings</h4>
          <p>
          {userLang.includes('fr') ? 'Regler vos preferences' 
            :userLang.includes('de') ? 'Legen Sie Ihre Einstellungen fest'
            :'Set your preferences' }
            
            </p>
          <ul id="footer-settings">
            <li><ThemeBtn/></li> 
            <li><LangueBtn/></li>
          </ul>
        </div>
      </div>
      <div id="credit">
        <p>@Marcel Sawuri <span>2023</span></p>
        <p>Website made by Nasoa</p>
      </div>
    </footer>

  )
}

export default Footer