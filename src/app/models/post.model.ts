import { guid } from '@datorama/akita';

export type Post = {
  id: string;
  title: string;
  body: string;
}

export function createPost(title: string, body: string) {
  return {
    id: guid(),
    title,
    body
  } as Post;
}
