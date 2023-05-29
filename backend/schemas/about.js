export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'myname',
      title: 'My name',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [{type: 'text'}],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
