import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {

    const[showMenu,setShowMenu] = useState(false);
    const[isMobile,setIsMobile] = useState(false);

    useEffect(()=>{
    })

    useEffect(()=>{
        window.innerWidth <= 700 ? setIsMobile(true) : setIsMobile(false);
    },[])
    
    return (
        <Context.Provider
        value={{
            showMenu,
            setShowMenu,
            isMobile,
            setIsMobile,
        }}
        >
        {children}
        </Context.Provider>
    )
}

//fetching data 
/* export const getServerSideProps = async ()=>{
  
    return {
      props: { products }
    }
  } */

export const useStateContext = () => useContext(Context);