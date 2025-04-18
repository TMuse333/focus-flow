import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'e0quts4x', // e.g., 'e0quts4x'
  dataset: 'production',
  apiVersion: '2025-04-17', // today's date or your schema version date
  useCdn: true, // Use CDN for production
})
