import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { ImgHTMLAttributes } from 'react';



type PostProps = {
  params: { id: string };
};

export default async function Post({ params }: PostProps) {
    const postData = await getPostData(params.id);
  
    // If no post data is found, return a 404 page
    if (!postData) {
      return notFound();
    }
  
    return (
      <div className="prose lg:prose-xl mx-auto px-4 py-8
       tex">
        <article>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <p className="text-black">{new Date(postData.date).toDateString()}</p>
          <ReactMarkdown
         
        >
            {postData.contentHtml}
          </ReactMarkdown>
        </article>
      </div>
    );
  }