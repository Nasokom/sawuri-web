export default {
    name: 'contenu',
    type: 'document',
      title: 'Biographie Sawuri',
    fields: [
       {   
        name:"ordre",
        type:"number",
        title:"Ordre"
      },
      {
        name: 'title',
        type: 'string',
        title: 'Titre'
      },

      {
        name: 'titleDe',
        type: 'string',
        title: 'Titre De'
      },
      {
        name: 'titleEn',
        type: 'string',
        title: 'Titre En'
      },

      {
        title: 'paragraphe',
        name: 'contenu',
        type: 'array',
        of: [{
            type: 'textImage',
        },
        ]},
     
    ]}