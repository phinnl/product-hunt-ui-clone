import { Tag } from "./tag";

export interface Post {
  id: string;
  title?: string;
  descriptions?: string;
  image?: string;
  video?: string;
  comment?: number;
  upvote?: number;
  tags?: Tag[];
}