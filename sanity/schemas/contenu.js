export default {
    name: 'contenu',
    type: 'document',
      title: 'Biographie Sawuri',
    fields: [
       {   
        name:"ordre",
        type:"number",
        title:"Ordre"
      },
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        title: 'paragraphe',
        name: 'para',
        type: 'array',
        of: [{ type: 'text',}]
      },
      {
        title: 'images',
        name: 'images',
        type: 'array',
        of: [{type: 'image'}]
      }
     
    ]}