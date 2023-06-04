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
        name:'titles',
        type:'titleTrad',
        title:'Titre traduits'
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