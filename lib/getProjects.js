import { client } from '@/sanity';

export default function getProjects() {
  const res = client.fetch('*[_type == "projects"]');
  return res;
}
