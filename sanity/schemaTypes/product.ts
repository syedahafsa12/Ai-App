export default {
    name: 'product',
    type: 'document',
    title: 'Images',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of Image',
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [{type: 'image'}],
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description of Image',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'name',
        },
      },
      
    
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [
          {
            type: 'category',
          },
        ],
      },
    ],
  }