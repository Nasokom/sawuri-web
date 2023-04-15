export default{
    title: 'titre + image',
    name: 'titreText',
    type: 'object',
    fields: [
        {
            name:'titre',
            title:'Titre',
            type:"string"
        },
        {
            name:'titreEn',
            title:'Titre En',
            type:"string"
        },
        {
            name:'titreDe',
            title:'Titre De',
            type:"string"
        },

      {
        name: 'text',
       title: 'text fr',
       type: 'array',
       of:[{type:"block"}]
      },
      {
        name: 'textEn',
      title: 'text en',
      type: 'array',
      of:[{type:"block"}]
     },
     {
        name: 'textDe',
      title: 'text De',
      type: 'array',
      of:[{type:"block"}]
     },
    ]
  }