export default {
    name: 'video',
    type: 'document',
      title: 'Videos',
    fields: [
      {
        name: 'titre',
        type: 'string',
        title: 'Titre'
      },
      {
        name:"url",
        type:"text",
        title:"Lien",
        description:"chemin exact svp"
      },
      {
        name:'desc',
        type:'string',
        title:'Description',
        description:"Presentation courte"
      },
    ]
}