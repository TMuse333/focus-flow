import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define an interface for the post data
interface PostData {
  id: string;
  title: string;
  date: string; // Adjust the type if your date is a different format
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    console.log(`Attempting to read file at: ${fullPath}`); // Log the full path
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
        id,
        title: matterResult.data.title, // Ensure title is pulled from the Markdown front matter
        date: matterResult.data.date, // Ensure date is pulled from the Markdown front matter
        contentHtml: matterResult.content,
    };
}
