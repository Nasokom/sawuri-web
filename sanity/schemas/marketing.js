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
      name:'text',
      title:"Text Traduction",
      type:'textTrad',
     },
     {
      name:'image',
      type:'image',
      title:"Image",
      description :'A voir si utile avec les dessin de kevin'
    },
    ]
}