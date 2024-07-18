import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_DATASET);

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // `false` se você quiser garantir dados frescos
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
