import { getPostData } from '../../../lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Content from '../../../components/content/content';
import BigNav from '@/components/bigNav/navbar';
import Footer2 from '@/components/footer2/footer2';
import logo from '../../../../public/media/focusFlow-brain-nobg.webp'
import Image from 'next/image';

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
    <>
   
   <BigNav
   excludedLink=''
   />
    <main className="w-screen overflow-x-hidden
    flex flex-col items-center justify-center
    mt-10">

      <article className='px-4'>

    <section className='flex flex-col w-screen md:w-[80vw] md:justify-around 
    px-4 justify-center items-center'>
    <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <p className="text-white">{new Date(postData.date).toDateString()}
        , &nbsp; written by Thomas Musial, owner of
        FocusFlow Software</p>
    </section>
      
        <Image
        src={logo}
        alt='The FocusFlow logo for web design in halifax'
        width={600}
        height={1300}
        className='w-[40vw] mx-auto'
        />

        <section className='p-4'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
            {postData.header1}</h2>
          <p>
            {postData.description1}
          </p>
        </section>
        
        <Content
          image={postData.contentBox1.image}
          description={postData.contentBox1.description}
          mainTitle={postData.contentBox1.mainTitle}
          reverse={postData.contentBox1.reverse}
          alt={postData.contentBox1.alt}
          floatingImage={false}
          hasAnimation={false}
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

        <Content
         image={postData.contentBox3.image}
          description={postData.contentBox3.description}
          mainTitle={postData.contentBox3.mainTitle}
          reverse={postData.contentBox3.reverse}
          alt={postData.contentBox3.alt}
          floatingImage={false}
          hasAnimation={false}
        />

      <section className='p-4'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
            {postData.header2}</h2>
          <p>
            {postData.description2}
          </p>
        </section>

        <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
        <Footer2
        excludedLink=''
        />
      </article>
    </main>
    </>
  );
}
