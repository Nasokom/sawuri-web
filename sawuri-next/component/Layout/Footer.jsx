import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>

      <h2>"Stay tuned for more musical magic."</h2>

      <div className='footer-menu'>
          <p>Site Map</p>
          <Link href={'/'}>home</Link>
          <Link href={'/about'}>about</Link>
          <Link href={'/media'}>media</Link>
          <Link href={'/contact'}>contact</Link>
          <Link href={'/musiciens'}>musiciens</Link>
      </div>

      <div>

      </div>


    </footer>
  )
}

export default Footer