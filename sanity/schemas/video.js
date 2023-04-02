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
        type:"string",
        title:"Lien",
        description:"chemin exact svp"
      },
      {
        name:"source",
        type:"string",
        title:"Source",
        options: {
          list: [
            'youtube', 'facebook', 'dailymotion','autre',
          ], // <-- predefined values
          layout: 'radio' // <-- defaults to 'dropdown'
        },
        description:"important"
      },
      {
        name:'desc',
        type:'string',
        title:'Description',
        description:"Presentation courte"
      },
    ]
}