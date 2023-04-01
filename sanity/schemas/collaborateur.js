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
        name: 'skillz',
        title: 'instruments / Competences,',
        type:'array',
        of:[{ type: 'string'}],
        description : '1 block = 1 skill, "1 est mieux que 10"'
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