export default {
    name: 'video',
    type: 'document',
      title: 'Medias',
    fields: [
      {
        name: 'titre',
        type: 'string',
        title: 'Titre'
      },
      {
        name:'ordre',
        type:'number',
        title:'ordre',
        description:"Definit l'ordre d'apparition"
      },
      {
        name:"titles",
        type:"titleTrad",
        title:'Titre traduit'
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