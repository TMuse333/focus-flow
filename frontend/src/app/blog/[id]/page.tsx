import { getPostData, getRelatedPosts,getAllPostIds } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Content from '../../../components/content/content';
import BigNav from '@/components/bigNav/navbar';
import Footer2 from '@/components/footer2/footer2';
import Image from 'next/image';
import logo from '../../../../public/media/focusFlow-brain-nobg.webp';
import { Metadata } from 'next';
// import TableOfContents from '@/components/table-of-contents';

import SchemaMarkup from '../../../lib/schemaMarkup'

type PostProps = {
  params: { id: string };
};

// Static generation for better performance
export async function generateStaticParams() {
  const posts = await getAllPostIds(); // Hypothetical function
  return posts.map((post) => ({ id: post.id }));
}

// Dynamic metadata with structured data
export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const postData = await getPostData(params.id);
  if (!postData) return notFound();

  return {
    title: postData.title,
    description: postData.metaDescription,
  
    openGraph: {
      title: postData.title,
      description: postData.metaDescription,
      url: `https://www.focusflowsoftware.com/posts/${params.id}`,
      images: [
        {
          url: postData.metaOpenGraph.url || 'https://www.focusflowsoftware.com/media/focusFlow-logo.png',
          width: 1200,
          height: 630,
          alt: `${postData.title} - Focus Flow Software`,
        },
      ],
      type: 'article',
    },
  };
}

// Main post component
export default async function Post({ params }: PostProps) {
  const postData = await getPostData(params.id);
  const relatedPosts = await getRelatedPosts(params.id); // Hypothetical function
  if (!postData) return notFound();

  return (
    <>
      <SchemaMarkup
        type="BlogPosting"
        data={{
          headline: postData.title,
          description: postData.metaDescription,
          datePublished: postData.date,
          author: { name: 'Thomas Musial' }, // Hardcoded as per your usage
        }}
      />
      <BigNav excludedLink="" />
      <main className="w-screen min-h-screen overflow-x-hidden flex flex-col items-center bg-[#0e0e0e] text-gray-200">
        <article className="w-full flex flex-col items-center">
          <section className="flex flex-col w-full md:w-[80vw] max-w-[1200px] px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">{postData.title}</h1>
            <p className="text-gray-300">
              {postData.date} | By Thomas Musial, FocusFlow Software
            </p>
            {/* <ReadingTime content={postData.contentHtml} /> */}
          </section>

          <Image
            src={logo}
            alt={`${postData.title} featured image`}
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 600px"
            className="w-[40vw] max-w-[600px] max-h-[400px] mt-4 object-cover"
            priority={true} // For above-the-fold image
          />

          {/* <TableOfContents content={postData.contentHtml} /> */}

          <section className="p-4 w-full md:w-[80vw] max-w-[1200px]">
            <h2 className="text-3xl font-semibold mb-2 text-white">{postData.header1}</h2>
            <p className="text-gray-300 whitespace-pre-line">{postData.description1}</p>
          </section>

          <div className="w-[80vw] max-w-[1200px] mx-auto h-[5px] bg-[#00bfff] bg-opacity-[0.6] my-14" />

          {postData.contentBoxes?.map((contentBox, index) => (
            <div key={index}>
              <Content
                image={contentBox.image}
                description={contentBox.description}
                mainTitle={contentBox.mainTitle}
                reverse={contentBox.reverse}
                alt={contentBox.alt}
                floatingImage={false}
                hasAnimation={false}
                // Lazy-load non-critical content
              />
              {/* {igetPostData index < postData.contentBoxes.length - 1 && (
                <div className="w-[80vw] max-w-[1200px] mx-auto h-[5px] bg-[#00bfff] bg-opacity-[0.6] my-14" />
              )} */}
            </div>
          ))}

          <div className="w-[80vw] max-w-[1200px] mx-auto h-[5px] bg-[#00bfff] bg-opacity-[0.6] my-14" />

          <ReactMarkdown className="markdown-styles px-4 max-w-[1200px]">
            {postData.contentHtml}
          </ReactMarkdown>

          {/* <RelatedPosts posts={relatedPosts} /> */}
        </article>
        <Footer2 excludedLink="" />
      </main>
    </>
  );
}