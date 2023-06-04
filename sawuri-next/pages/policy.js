import Head from 'next/head'
import React,{useEffect, useRef} from 'react'
import { client } from '@/Utils/sanity/sanityClient'
import ComplexText from '@/component/Ui/ComplexText'
import { useStateContext } from '@/context/StateContext'


const Policy = ({policys}) => {

    const {userLang} = useStateContext()

  const toggleText = (e) => {
    const subCateg = mainRef.current.querySelectorAll('.policy-text');
    //console.log(subCateg[i])
    subCateg.forEach(elt => {
      elt.style.maxHeight = "0vh"
    });

    const button = mainRef.current.querySelectorAll('button');

    button.forEach(elt => {
      elt.style.width ="40px"
      elt.style.height ="40px"

    });

    console.log(e.target.parentElement.parentElement);
    const parent = e.target.parentElement.parentElement;
    const text = parent.querySelector('.policy-text');
    console.log(text)
    //text.classList.add('ppda')
    text.style.maxHeight = "100vh"
    parent.querySelector('button').style.width = "0px"
    parent.querySelector('button').style.height = "0px"
  }

  useEffect(()=>{

  },[userLang])

  const mainRef = useRef(null)


  return (

    <>
    <Head>
        <title>Policy</title>
        <meta name="description" content="Find the policy of the sawuri's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex,nofollow" />
    </Head>

    <div id="policy" ref={mainRef}>
        <h1 className='page-title'>policy</h1>
        
      {policys.map((policy,i)=>{
        return(
          <div className='policy-categ' key={i} id={policy.id}>

            <h2>{policy.title[userLang]}</h2>

            <div>

              {policy.subCateg.map((categ,i)=>{
                return(
                  <div className='policy-sub-categ' key={i}>

                    <div className='policy-sub-title' onClick={(e)=>toggleText(e)}>
                      <h3>{categ.title[userLang]}</h3>
                      <button>
                      </button>
                    </div>

                    <div className='policy-text'>
                      <ComplexText texts={categ.texts[userLang]}/>
                    </div>
                  </div>
                )
              })}

            </div>

          </div>
          )
        })}
    </div>
  </>
  )
}

export default Policy

export async function getStaticProps() {

  const policys = await client.fetch(`*[_type == "policy"]`);
  return {
    props: {
      policys
    },
    revalidate: 1,
  };
}