import { Metadata } from 'next';

export interface PostMetaData extends Metadata {
  title: string;
  description: string;
  publishDate: string;
  tags: string[];
}

export interface Post extends PostMetaData {
  slug: string;
}
