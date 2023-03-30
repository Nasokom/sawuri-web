export default {
    name: 'banner',
    type: 'document',
      title: 'Banner',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },

      {
        name:'titre',
        type: 'string',
        title:'Titre'
      },
      {
        title: 'Text',
        name: 'text',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        title: 'images',
        name: 'images',
        type: 'array',
        of: [{type: 'image'}]
      }
    ]
  }