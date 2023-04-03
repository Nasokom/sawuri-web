export default{
    title: 'text + image',
    name: 'textImage',
    type: 'object',
    fields: [
      {name: 'text',
       title: 'Paragraphe',
       type: 'array',
       of:[{type:"block"}]
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
      {name: 'image', type: 'image', title: 'Image'},
    ]
  }

  