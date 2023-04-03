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
      {name: 'image', type: 'image', title: 'Image'},
    ]
  }

  