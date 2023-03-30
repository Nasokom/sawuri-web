export default {
    name: 'sons',
    type: 'document',
      title: 'Sons',
    fields: [
      {
        name: 'titre',
        type: 'string',
        title: 'Titre'
      },
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