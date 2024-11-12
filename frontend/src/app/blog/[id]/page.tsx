import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Content from '../../../components/content/content';
import BigNav from '@/components/bigNav/navbar';
import Footer2 from '@/components/footer2/footer2';
import Image from 'next/image';
import logo from '../../../../public/media/focusFlow-brain-nobg.webp';
import { Metadata } from 'next';

type PostProps = {
  params: { id: string };
};

// Dynamic metadata generation
export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const postData = await getPostData(params.id);

  if (!postData) {
    return notFound();
  }

  return {
    title: postData.title ,
    description: postData.metaDescription ,
    openGraph: {
      title: postData.title ,
      description: postData.metaOpenGraph.description,
      url: `https://www.focusflowsoftware.com/posts/${params.id}`,
      images: [
        {
          url: "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
          width: 1200,
          height: 630,
          alt: "Focus Flow Software - Best Web Design in Halifax",
        },
      ],
      type: "article",
    },
  };
}

// Main post component
export default async function Post({ params }: PostProps) {
  const postData = await getPostData(params.id);

  if (!postData) {
    return notFound();
  }

  return (
    <>
      <BigNav excludedLink='' />
      <main className="w-screen overflow-x-hidden flex flex-col items-center justify-center mt-12"
        style={{
          background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)',
        }}>
        
        <article>
          <section className=''
          style={{
            background: 'radial-gradient(circle, #00bfff -150%, rgba(0, 191, 255, 0%) 80%)'
          }}>
           
          <section className="flex flex-col w-screen md:w-[80vw] justify-center items-center mx-auto max-w-[1200px] px-4"
         >
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <p className="text-white">
              {new Date(postData.date).toDateString()}, &nbsp; written by Thomas Musial, owner of FocusFlow Software
            </p>
          </section>

          <Image
            src={logo}
            alt="The FocusFlow logo for web design in Halifax"
            width={600}
            height={1300}
            className="w-[40vw] mx-auto object-contain max-w-[460px] max-h-[460px]"
            
          />

          

          <section className="p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              {postData.header1}
            </h2>
            <p>{postData.description1}</p>
          </section>
          </section>

          <div className='w-[80vw] max-w-[1200px] mx-auto
        h-[5px] bg-[#00bfff] bg-opacity-[0.6]
        my-14'
        />

          <Content
          image={postData.contentBox1.image}
          description={postData.contentBox1.description}
          mainTitle={postData.contentBox1.mainTitle}
          reverse={postData.contentBox1.reverse}
          alt={postData.contentBox1.alt}
          floatingImage={false}
          hasAnimation={false}
        />

<div className='w-[80vw] max-w-[1200px] mx-auto
        h-[5px] bg-[#00bfff] bg-opacity-[0.6]
        my-14'
        />

        <Content
          image={postData.contentBox2.image}
          description={postData.contentBox2.description}
          mainTitle={postData.contentBox2.mainTitle}
          reverse={postData.contentBox2.reverse}
          alt={postData.contentBox2.alt}
          floatingImage={false}
          hasAnimation={false}
       
        />

<div className='w-[80vw] max-w-[1200px] mx-auto
        h-[5px] bg-[#00bfff] bg-opacity-[0.6]
        my-14'
        />

        <Content
         image={postData.contentBox3.image}
          description={postData.contentBox3.description}
          mainTitle={postData.contentBox3.mainTitle}
          reverse={postData.contentBox3.reverse}
          alt={postData.contentBox3.alt}
          floatingImage={false}
          hasAnimation={false}
        />

<div className='w-[80vw] max-w-[1200px] mx-auto
        h-[5px] bg-[#00bfff] bg-opacity-[0.6]
        my-14'
        />

<section className="p-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              {postData.header2}
            </h2>
            <p>{postData.description2}</p>
          </section>

          <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
          <Footer2 excludedLink='' />
        </article>
      </main>
    </>
  );
}
