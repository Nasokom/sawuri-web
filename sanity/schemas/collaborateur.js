export default {
    name: 'team',
    type: 'document',
      title: 'Musiciens / Collaborateur',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name:'desc',
        title:'Description',
        type: 'array',
        of: [{type: 'text'}],
        description:'conseil 1 text sur la rencontre avec Marcel Sawuri, et 1 pour decrire le collaborateur lui meme'
      },
      {
        name:'text',
        title:'Description f',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name:'textEn',
        title:'Description englais',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name:'textDe',
        title:'Description allemand',
        type: 'array',
        of: [{type: 'block'}],
      },
      {
        name: 'skillz',
        title: 'instruments / Competences,',
        type: 'string',
      },
      {
        name: 'skillzEn',
        title: 'instruments En',
        type:'string',
        of:[{ type: 'string'}],
      },
      {
        name: 'skillzDe',
        title: 'instruments De',
        type:'string',
      },

      {
        title: 'images',
        name: 'images',
        type: 'image',
      },
      {
        title:'link',
        name:'contact',
        type:'array',
        of:[{type:'string'}],
        description:"pas obligatoire "
      }
    ]
  }