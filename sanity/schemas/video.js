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
        name: 'titreEn',
        type: 'string',
        title: 'Titre Englais' 
      },
      {
        name: 'titreDe',
        type: 'string',
        title: 'Titre allemand'
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
          ], 
          layout: 'radio',
        },
        description:"important"
      },
      {
        name:'desc',
        type:'string',
        title:'Description',
        description:"Presentation courte",
      },
      {
        name:"path",
        type:"string",
        title:"FolderPathDontTouch!!!",
        description:"Ne pas modifier!!!!!!"
      }
    ]
}