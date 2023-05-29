import { client } from '@/sanity';

export default function getAbout() {
  const res = client.fetch('*[_type == "about"]');
  return res;
}
