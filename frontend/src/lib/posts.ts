import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

interface ContentBoxProps  {
  image: string;
  description: string[];
  mainTitle: string;
  reverse: boolean;
  alt: string;
  bgColor?: boolean;
}

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
  contentHtml: string;
  contentBoxes: ContentBoxProps[];
}

const postsDirectory = path.join(process.cwd(), 'posts');

// Get all post IDs
export function getAllPostIds(): { id: string }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/, ''),
  }));
}

// Get single post data
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
    contentHtml: matterResult.content,
    contentBoxes: matterResult.data.contentBoxes || [],
  };
}

// Get related posts based on shared keywords
export async function getRelatedPosts(id: string, limit: number = 3): Promise<PostData[]> {
  const currentPost = await getPostData(id);
  const currentKeywords = currentPost.metaKeywords.split(',').map((kw) => kw.trim().toLowerCase());

  const allPostIds = getAllPostIds().filter((post) => post.id !== id); // Exclude current post
  const relatedPosts: PostData[] = [];

  for (const postId of allPostIds) {
    const post = await getPostData(postId.id);
    const postKeywords = post.metaKeywords.split(',').map((kw) => kw.trim().toLowerCase());
    const sharedKeywords = currentKeywords.filter((kw) => postKeywords.includes(kw));

    if (sharedKeywords.length > 0) {
      relatedPosts.push(post);
    }
  }

  // Sort by number of shared keywords (descending) and limit results
  return relatedPosts
    .sort((a, b) => {
      const aKeywords = a.metaKeywords.split(',').map((kw) => kw.trim().toLowerCase());
      const bKeywords = b.metaKeywords.split(',').map((kw) => kw.trim().toLowerCase());
      const aShared = currentKeywords.filter((kw) => aKeywords.includes(kw)).length;
      const bShared = currentKeywords.filter((kw) => bKeywords.includes(kw)).length;
      return bShared - aShared; // Sort by most shared keywords
    })
    .slice(0, limit);
}