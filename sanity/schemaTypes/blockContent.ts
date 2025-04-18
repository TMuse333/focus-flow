import { defineType } from 'sanity'

export default defineType(
    {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
    // add more types if needed (code, video embeds, etc)
  ],
}
)
