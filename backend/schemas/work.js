export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'tooltip',
      title: 'Tooltip',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tech',
      title: 'Tech',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'array',
      of: [{type: 'url'}],
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
}
