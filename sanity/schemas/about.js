export default {
    name: 'about',
    type: 'document',
    title: 'about',
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
        name: 'para',
        type: 'array',
        of: [{
            type: 'textImage',
        },
        ]},
     
    ]}