import React from 'react'
import { useState } from 'react'
import styles from '@/styles/modules/Actu.module.css'

const Actus = () => {

    const [open, toggle] = useState(false)

  return (
    <div className={`${styles.container} ${ open ? styles.collapse : ''}`}>

        <button className={styles.btn} onClick={(()=>toggle(!open))}>

        <div className={`${styles.cross} ${open ? styles.turnCross : ''}`}>
            <span/>
        </div>
                
        <svg viewBox="0 0 100 100" width="100" height="100">
            <defs>
                <path id="circle"
                d="
                    M 50, 50
                    m -37, 0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0"/>
            </defs>
            <text fontSize="10" color='#d83e00' className='circle' fill="var(--color1)">
                <textPath href="#circle">
                News - News - News - News - News -  
                </textPath>
            </text>
        </svg>


        </button>
    </div>
  )
}

export default Actus