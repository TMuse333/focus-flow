import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Content from '../../../components/content/content';
import BigNav from '@/components/bigNav/navbar';
import Footer2 from '@/components/footer2/footer2';
import Image from 'next/image';
import logo from '../../../../public/media/focusFlow-brain-nobg.webp';
import { Metadata } from 'next';
import Head from 'next/head'
import Link from 'next/link';

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

  // const structuredData = {
  //   "@context": "https://schema.org",
  //   "@type": "Article",
  //   "headline": "How FocusFlow Software plans websites to offer fast and effective web design in Halifax",
  //   "description": "Learn more about how FocusFlow software plans how to create effective websites...",
  //   "author": {
  //     "@type": "Person",
  //     "name": "John Doe",
  //   },
  //   "datePublished": "2024-11-15",
  //   "mainEntityOfPage": {
  //     "@type": "WebPage",
  //     "@id": `https://www.focusflowsoftware.com/posts/${params.id}`,
  //   },
  //   "image": {
  //     "@type": "ImageObject",
  //     "url": "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
  //     "width": 1200,
  //     "height": 630,
  //   },
  //   "publisher": {
  //     "@type": "Organization",
  //     "name": "FocusFlow Software",
  //     "logo": {
  //       "@type": "ImageObject",
  //       "url": "https://www.focusflowsoftware.com/media/focusFlow-logo.png",
  //       "width": 1200,
  //       "height": 630,
  //     },
  //   },
  // };

  return (
    <>
    {/* <Head>
      
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    </Head> */}
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
              {postData.date}, &nbsp; written by Thomas Musial, owner of FocusFlow Software
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2
            ">
              {postData.header1}
            </h2>
            <p className='whitespace-pre-line'>{postData.description1}</p>
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

<section className="p-4 bg-[#00bfff] bg-opacity-[0.2]
py-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
              {postData.header2}
            </h2>
            <p 
            className='whitespace-pre-line mb-6'>{postData.description2}</p>
            {postData.hasButtons  && (
              <>
              <button className='mt-2 p-3
              bg-[#00bfff] hover:text-[#00bfff]
              hover:bg-white transition-all rounded-2xl mr-2'>
                <Link href='/lets-work'>
                Book a meeting today
                </Link>
                </button>
                {postData.buttonDestination &&
                postData.buttonText && (
                  <button className='mt-2 p-3
                  hover:bg-[#00bfff] hover:text-white
                  text-[#00bfff] bg-white
                  transition-all rounded-2xl'>
                    <Link href={postData.buttonDestination}>
                  {postData.buttonText}
                    </Link>
                    </button>
                )}
               
              </>
            )}
          

           
          
          </section>

          <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
          <Footer2 excludedLink='' />
        </article>
      </main>
    </>
  );
}
