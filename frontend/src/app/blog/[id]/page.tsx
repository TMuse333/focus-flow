import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { ImgHTMLAttributes } from 'react';





// Custom Image component
interface MyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string; // Ensure src is always a string
    alt: string;
    width: number; // optional, allows for defaults
    height: number; // optional, allows for defaults
  }
  
  const MyImage: React.FC<MyImageProps> = ({ src, alt, width = 800, height = 600, ...props }) => {
    return (
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={width}  // Ensure these are numbers
        height={height} // Ensure these are numbers
        {...props}
      />
    );
  };

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
      <div className="prose lg:prose-xl mx-auto px-4 py-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <p className="text-gray-600">{new Date(postData.date).toDateString()}</p>
          <ReactMarkdown
          components={{
            img: (props: any) => <MyImage {...props} />, // Use a function to pass props to MyImage
          }}
        >
            {postData.contentHtml}
          </ReactMarkdown>
        </article>
      </div>
    );
  }
