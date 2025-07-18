import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
    name: 'video',
    type: 'document',
      title: 'Medias',
    orderings: [orderRankOrdering],

  fields: [

    {
      name:'titre',
      type:'string',
      title:'Titre dans Sanity',
      description:'Nom du document'
    },
    orderRankField({ type: "orderRank" }),
      {
        name:"titles",
        type:"titleTrad",
        title:'Titre site web'
      },
      {
        name:'file',
        title:'Video',
        description:'100mb max !!',
        type:'file',
        options: {
    accept: 'video/*', 
  },
      },
      {
        name:'ordre',
        type:'number',
        title:'ordre',
        description:"Definit l'ordre d'apparition"
      },

      {
        name:"url",
        type:"string",
        title:"Lien",
        description:"chemin exact svp",
        deprecated:'true',
        hidden:true,
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
        description:"important",
        deprecated:'true',
        hidden:true,
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
        description:"Ne pas modifier!!!!!!",
        deprecated:'true',
      }
    ]
}