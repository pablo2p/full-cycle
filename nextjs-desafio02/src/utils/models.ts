export type PostDocument = Post & Document;

export interface Post {
  title: string;

  created_at: number;

  description: string;

  image?: string;

  tags: string[];
}
