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
        name:'texts',
        type:'textTrad',
        title:'Description'
      },
      {
        name:'skill',
        title:'instruments / Skills',
        type:"titleTrad"
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