import React from 'react'
import { useState, useEffect } from 'react';
import styles from '@/styles/modules/News.module.css'
import { useStateContext } from '@/context/StateContext';
import ComplexText from '../Ui/ComplexText';
import { urlFor } from '@/Utils/sanity/sanityClient';
import Image from 'next/image';



const Ui = ({data, isLoading, userLang})=>{
  
  const [collapse, toggleCollapse] = useState(false)

  useEffect(()=>{

      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"

    return ()=>{
        document.documentElement.style.overflow = "auto"
        document.body.style.overflow = "auto"
    }
  },[])
  
  return(
    <div className={`${styles.container} ${collapse ? styles.collapsed : ''}` }>  
    <div className={`${styles.banner}`}>
        <p>News</p>
        <p>News</p>
        <p>News</p>
        <p>News</p>
    </div>
      <div className={`${styles.btnBox} ${collapse ? styles.btnActive : ''}`} onClick={()=>toggleCollapse(!collapse)}>
        
        <button onClick={()=>toggleCollapse(!collapse)}> 
          {collapse ? 'close' : "open"}
        </button>

        <div className={`${styles.banner}`}>
          <p>News</p>
          <p>News</p>
          <p>News</p>
          <p>News</p>
        </div>

      </div>


    <section className={collapse ? styles.visible : ''} >

      {isLoading && <p>Loading...</p>}
      {!data && <p>No profile data</p>}


      {data && 
      <div className={styles.content}> 

        {data.map((d,i)=>{

          const myLoader = () => {return d.image && urlFor(d.image).url()}
          return(
            
            <div key={i} className={styles.card}> 

              <div className={styles.card_top}>
                <h4>{d.name[userLang]}</h4>
                <h4>{d.date}</h4>
              </div>

              <div className={styles.content}>

                  <div className={styles.img}>
                    <Image 
                    style={{objectFit:'contain',borderRadius:"20px"}}
                    //src="https://cdn.sanity.io/images/sloowon5/production/18a9538b33dd7bb9b1d62f4d64490322ffd0b597-500x500.webp" 
                    height={500} 
                    width={400} 
                    loader={myLoader}
                    />
                  </div>

                  <div className={styles.left}>
                    
                    <div className={styles.text}>
                      {d.text && <ComplexText texts={d.text[userLang]}/>}
                    </div>


                    <div className={styles.adress}> 
                      <p>{d.adress}   </p>
                        <a href={`https://maps.google.com/maps?q=${d.adress}`} target='_blank'>
                          <button> Let's Go </button> 
                        </a>
                    </div>
                  </div>
                </div>
            </div>
          )
        })}
      </div>
      }
    </section>
  </div>
  )


}




const News = () => {
    const {userLang, isMobile} = useStateContext()
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {

      setLoading(true);
      fetch('/api/news')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          //console.log(data)
        });

    }, [userLang]);


  return (
    <>

    {data && data.length > 0 && 
      <Ui data = {data} isLoading={isLoading} userLang={userLang}/>
      }
    </>
  )
}

export default News