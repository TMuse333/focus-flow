import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { StaticImageData } from 'next/image';

// Define an interface for the post data
// Define an interface for the ContentBox data
interface ContentBoxProps {
  image: string;
  description: string[];
  mainTitle: string;
  reverse: boolean;
  alt: string;
  bgColor?:boolean

}

// Define an interface for the post data
interface PostData {
  id: string;
  title: string;
  date: string;
  header1:string,
  description1:string,
  header2:string,
  description2:string,
  contentHtml: string;
  contentBox1: ContentBoxProps;
  contentBox2: ContentBoxProps;
  contentBox3: ContentBoxProps;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml: matterResult.content,
    contentBox1: matterResult.data.contentBox1,
    contentBox2: matterResult.data.contentBox2,
    contentBox3: matterResult.data.contentBox3,
    header1: matterResult.data.header1,  // Add header1
    description1: matterResult.data.description1,
    header2: matterResult.data.header2,  // Add header1
    description2: matterResult.data.description2,
    
  };
}


