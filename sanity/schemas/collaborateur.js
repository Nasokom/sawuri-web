export default {
    name: 'collaborateur',
    type: 'document',
      title: 'Collaborateur / Musiciens  / Membres actifs',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name:'desc',
        type: 'text',
        title:'Description'
      },
      {
        title: 'images',
        name: 'images',
        type: 'image',
      },
      {
        title: 'lien',
        name:"lien",
        type: "array",
        of: [{ type: 'url',}]
      }
    ]
  }