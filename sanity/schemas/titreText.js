export default{
    title: 'titre + image',
    name: 'titreText',
    type: 'object',
    fields: [
        {
            name:'titre',
            title:'NOm',
            type:"string",
            description:'Non afficher sur le site'
        },
        {
          name:'title',
          title:'Titre Traduit',
          type:'titleTrad'
        },
     {
      name:'texts',
      title:'Textes Traduit',
      type:'textTrad'
      }
    ]
  }