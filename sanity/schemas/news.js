export default {
    name:'news',
    type:'document',
    title:'Actualité',
    fields:[
        {
            name:'nameBack',
            type:'string',
            title:'Nom backoffice',
            description:"non afficher sur le site"
        },
        {
            name:'actif',
            type:'boolean',
            title:'Afficher',
            description:'Afficher ou non la news'
        },
        {
            name:'name',
            type:'titleTrad',
            title:'Titre'
        },
        {
            name:'text',
            type:'textTrad',
            title:'Text'
        },
        {
            name:'image',
            type:'image',
            title:'Image'
        },
        {
            name:'date',
            type:'date',
            title:'Date',
            description:'optionnel'
        },
        {
            name:'adress',
            type:'string',
            title:'Adresse',
            description:'optionnel'
        },
    ]

}