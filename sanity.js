import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'o250rvq1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-29',
  token:
    'skeSiOYCnzO7seZMluQi5Hb3jldYxWjd8L9od6p5HVM0W2h62ycZy6IS1ye7otiBdPLVdOesNqyEPxQw6XOVUsksnUSl2ZqYgCLceuLx5IWpcfTK4WW0DsdPqDJoKASby8zeK50H7fLqKVxR02UQYKDM6NXUZmVOhkFAmVPFfBPXk80m8ZOC',
});

const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}
