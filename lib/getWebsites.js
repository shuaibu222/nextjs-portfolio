import { client } from '@/sanity';

export default async function getWebsites() {
  const res = client.fetch('*[_type == "websites"]');
  return res;
}
