export default {
    name: 'gallery',
    type: 'document',
      title: 'Gallery',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name:"desc",
        type:'string',
        title:"Description"
      },
      {
        name:'image',
        type:'image',
        title:"Image"
      },
      {
        title: 'Type',
        name: 'type',
        type: 'string',
        options: {
          list: [
            'photo', 'presse', 'autres'
          ], // <-- predefined values
          layout: 'radio' // <-- defaults to 'dropdown'
        }
      }
    ]
  }