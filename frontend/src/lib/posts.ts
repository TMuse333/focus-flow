import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { StaticImageData } from 'next/image';
import { Metadata } from 'next';
interface MetaOpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

interface MetaOpenGraphProps {
  title: string;
  description: string;
  url: string;
  images: MetaOpenGraphImage[];
}

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
  metaTitle: string;
  date: string;
  metaDescription: string;
  metaKeywords: string;
  metaOpenGraph: MetaOpenGraphProps;
  title: string;
  header1: string;
  description1: string;
  header2: string;
  description2: string;
  contentHtml: string;
  contentBox1: ContentBoxProps;
  contentBox2: ContentBoxProps;
  contentBox3: ContentBoxProps;
  hasButtons?:boolean
  buttonText?:string
  buttonDestination?:string,

}


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const postData = await getPostData(params.id);

  return {
    title: postData.metaTitle,
    description: postData.metaDescription,
    keywords: postData.metaKeywords.split(','),
    openGraph: {
      title: postData.metaOpenGraph.title,
      description: postData.metaOpenGraph.description,
      url: postData.metaOpenGraph.url,
      images: postData.metaOpenGraph.images.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    },
  };
}


const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    id,
    metaTitle: matterResult.data.metaTitle,
    date: matterResult.data.date,
    metaDescription: matterResult.data.metaDescription,
    metaKeywords: matterResult.data.metaKeywords,
    metaOpenGraph: matterResult.data.metaOpenGraph,
    title: matterResult.data.title,
    header1: matterResult.data.header1,
    description1: matterResult.data.description1,
    header2: matterResult.data.header2,
    description2: matterResult.data.description2,
    contentHtml: matterResult.content,
    contentBox1: matterResult.data.contentBox1,
    contentBox2: matterResult.data.contentBox2,
    contentBox3: matterResult.data.contentBox3,
    hasButtons: matterResult.data.hasButtons,
    buttonText: matterResult.data.buttonText,
    buttonDestination: matterResult.data.buttonDestination
  };
}


