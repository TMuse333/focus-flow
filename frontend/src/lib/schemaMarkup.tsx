interface SchemaMarkupProps {
    type: string;
    data: {
      headline: string;
      description: string;
      datePublished: string;
      author: { name: string };
    };
  }
  
  export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
    const schema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
      author: {
        '@type': 'Person',
        name: data.author.name,
      },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
  }