import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_KEY,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-29',
  token: process.env.NEXT_PUBLIC_TOKEN_KEY,
});

const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}
