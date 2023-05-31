import React from 'react'
import { useState, useEffect } from 'react';
import styles from '@/styles/modules/News.module.css'
import { useStateContext } from '@/context/StateContext';
import ComplexText from '../Ui/ComplexText';
import { urlFor } from '@/Utils/sanity/sanityClient';
import Image from 'next/image';

const News = () => {
    const {userLang, isMobile} = useStateContext()
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [collapse, toggleCollapse] = useState(false)

    useEffect(() => {

      setLoading(true);
      fetch('/api/news')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data)
        });
    }, []);


  return (
    <div 
        className={ `${styles.container} ${collapse ? styles.collapsed : ''}` } 
    >  
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


          {
            data && 
          <div className={styles.content}> 

            {data.map((d,i)=>{

             const myLoader = () => {return d.image && urlFor(d.image).url()}
              return(
                <div key={i} className={styles.card}> 
                    <h4>{d.name[userLang]}</h4>

                    <h4>{d.date}</h4>


                    <div className={styles.left}>
                      <div className={styles.text}>
                        <ComplexText texts={d.text[userLang]}/>
                      </div>
                      <div className={styles.adress}> 
                      <p>{d.adress}</p>
                      <button><a href={`https://maps.google.com/maps?q=${d.adress}`} target='_blank'> Let's Go </a></button> 
                      </div>
                    </div>


                    <div className={styles.img}>
                      <Image 
                      style={{objectFit:'contain',borderRadius:"20px"}}
                      src="vzzf" 
                      height={500} 
                      width={400} 
                      loader={myLoader}
                      />
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

export default News