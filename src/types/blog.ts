export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  email: string;
  socialLinks: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: Author;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  views: number;
  readTime: number;
}

export interface Comment {
  id: string;
  postId: string;
  author: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: string;
  replies?: Comment[];
}