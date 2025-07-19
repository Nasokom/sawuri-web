import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
export default {
    name: 'sons',
    type: 'document',
      title: 'Musique Piste',
  orderings: [orderRankOrdering],
  fields: [

    {
      name: 'titre',
      type: 'string',
      title: 'Titre'
    },
    orderRankField({ type: "orderRank" }),
      {
        name:"audio",
        type:"file",
        title:"Musique"
      },
      {
        name:'album',
        type:'string',
        title:'Album'
      },
      {
        name:"pochette",
        type:"image",
        title:"Pochette",
      }
    ]
  }