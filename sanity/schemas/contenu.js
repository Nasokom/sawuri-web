export default {
    name: 'contenu',
    type: 'document',
      title: 'Contenu',
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
      },
       {
        title: 'Text',
        name: 'text',
        type: 'array',
        of: [{type: 'block'}]
      }
     
    ]}