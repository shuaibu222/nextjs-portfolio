import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.PROJECT_ID_KEY,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-29',
  token: process.env.TOKEN_KEY,
});

const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}
