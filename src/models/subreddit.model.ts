import { Post } from "./post.model";

export interface Subreddit {
  id?: string;
  name: string;
  description: string;
  posts: Array<Post>;
}
