import React,{useState, useEffect, useRef} from 'react'
import { FiSun, FiMoon } from 'react-icons/fi';
import { useStateContext } from '@/context/StateContext';

const ThemeBtn = () => {

    const {theme, setTheme} = useStateContext() 

    const main = useRef(null)

    useEffect(()=>{
        theme ? document.documentElement.setAttribute("data-theme", "dark") 
        : document.documentElement.setAttribute("data-theme", "light") ;

        if(theme){
            main.current.querySelector('.theme-logo').classList.add('btnDark')
            main.current.style.paddingLeft = "10px"
        }else{
            main.current.querySelector('.theme-logo').classList.remove('btnDark')
            main.current.style.paddingLeft = "40px"
        }
    })

  function switchTheme() {

    setTheme(!theme)

    if (theme) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }    
}

  return (
    <button className="theme-btn" name="Theme button" aria-label="theme button" onClick={()=>switchTheme()} ref={main}>
        {theme ? 'dark mode' : 'light Mode'}
       <span className="theme-logo">{theme ? <FiMoon/> : <FiSun/>}</span> 
    </button>
  )
}

export default ThemeBtn