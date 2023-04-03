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
        name: 'name',
        type: 'string',
        title: 'Titre'
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