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
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tooltip',
      title: 'Tooltip',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
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
      name: 'github',
      title: 'Github',
      type: 'url',
    },
    {
      name: 'site',
      title: 'Site',
      type: 'string',
    },
  ],
}
