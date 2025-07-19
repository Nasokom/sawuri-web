import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
export default {
    name: 'contenu',
    type: 'document',
      title: 'Biographie Sawuri',
   orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "orderRank" }),

      {
        name: 'title',
        type: 'string',
        title: 'Titre'
      },
      {
        name:'titles',
        type:'titleTrad',
        title:'Titre traduits'
      },
      {
        title: 'paragraphe',
        name: 'contenu',
        type: 'array',
        of: [{
            type: 'textImage',
        },
        ]},
     
    ]}