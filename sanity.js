import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'o250rvq1',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-29',
  token: 'skaKvkYBfLWNNJmvSGCZdi7T09QDu5rTy1Mot8q1eyxsHCLfoMOKQ27Ogi3zjKzdv2IkbJHhdx3rlGvZuiFj3kgqMju9G7ZnxzEbErod5X22rCI1qmRGSwKsKG8O9ntCa3g7eBDRXEn0YCKp9HQZHJHJHxTrPH5hoAZxvgpby4PGwRMLqudv',
});

const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}
