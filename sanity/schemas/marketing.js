export default {
    name: 'Marketing',
    type: 'document',
      title: 'Marketing',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
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
     },
     {
      name:'image',
      type:'image',
      title:"Image",
      description :'A voir si utile avec les dessin de kevin'
    },
    ]
}