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
        name:"text",
        title:"Paragraphe",
        type:'array',
        of:[{type:'text'}],
        description :'text sans modif pour le moment'
      },
      {
        name:'image',
        type:'image',
        title:"Image",
        description :'A voir si utile avec les dessin de kevin'
      },
    ]
}