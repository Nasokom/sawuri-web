import React ,{useState, useEffect}from 'react'
import ComplexText from '../Ui/ComplexText';
import { useStateContext } from '@/context/StateContext';


const Intro = ({data}) => {

  
  const {userLang} = useStateContext();
  const [tradText, setTradText ] = useState()

 const textFr = `Un safari musical entre Sahel et Jamaïque,
 avec la voix du chanteur pour guide. De l’espoir à l’injustice, 
 de la vie à la mort, des abus de pouvoirs (politiques ou spirituels) à l’amitié ... `,

 textFr2 = `Un repertoire tour à tour tendre, revolté, emouvant ou passionné. Chanté en bwamou, 
 et dioula "2 des 50 dialectes du BurkinaFaso", en anglais et français 
 (pour l’universalité du message).Un groove né sous le zenith et pétri par la
  dure terre du Sahel aux rythmes ancestraux.`,
  textEn = `A musical safari between Sahel and Jamaica, with the voice of the singer as a guide. From hope to injustice, from life to death, from abuse of power (political or spiritual) to friendship...`,
  textEn2 = `A repertoire alternately tender, rebellious, moving or passionate. Sung in Bwamou, and Dioula "2 of the 50 dialects of Burkina Faso", in English and French (for the universality of the message). A groove born under the zenith and kneaded by the harsh soil of the Sahel with ancestral rhythms.`,
textDe=`Eine musikalische Safari zwischen Sahel und Jamaika, mit der Stimme des Sängers als Führer. Von der Hoffnung bis zur Ungerechtigkeit, vom Leben bis zum Tod, vom Machtmissbrauch (politisch oder spirituell) bis zur Freundschaft...`,
textDe2=`Ein Repertoire abwechselnd zärtlich, rebellisch, bewegend oder leidenschaftlich. Gesungen in Bwamou und Dioula „2 der 50 Dialekte von Burkina Faso“, in Englisch und Französisch (für die Universalität der Botschaft) Ein Groove, der unter dem Zenit geboren und von der rauen Erde der Sahelzone mit uralten Rhythmen geknetet wird.`;
  console.log(data[0]);

  return (
    <div className='intro'>

        
<p>   { userLang.includes('fr') ?textFr
            : userLang.includes('de') ? textDe
            : textEn}</p>
        <p>   { userLang.includes('fr') ?textFr2
            : userLang.includes('de') ? textDe2
            : textEn2}</p>

    </div>
  )
}

export default Intro



/*  {
        name:"textfr",
        title:"Paragraphe f",
        type:'array',
        of:[{type:'block'}],
      },
      {name: 'textEn',
      title: 'Paragraphe Anglais',
      type: 'array',
      of:[{type:"block"}]
     },
     {name: 'textDe',
      title: 'Paragraphe De',
      type: 'array',
      of:[{type:"block"}]
     }, */