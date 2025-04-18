// /lib/queries.ts

export const allPostsQuery = `
  *[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    body,
    mainImage {
      asset->{
        url
      }
    }
  }
`

  
  export const singlePostQuery = (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "author": author->name,
    body
  }`;
  