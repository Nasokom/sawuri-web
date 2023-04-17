import React , {useRef} from 'react'

const CookiePolicy = () => {

const cookieRef = useRef(null);


function close(){
    cookieRef.current.style.display = "none"
}
  return (
    <div id="cookieBanner" ref={cookieRef}>
            <p>
            Nous ne recoltons que les données strictement necessaires, vos données ne sont pas revendues à un tiers 
            </p>
            <button onClick={()=>close()}>Ok</button>

    </div>
  )
}

export default CookiePolicy