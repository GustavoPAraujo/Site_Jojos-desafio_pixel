import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: '0dqt029n', // Substitua pelo seu ID de projeto Sanity
  dataset: 'production', // Substitua pelo seu dataset
  useCdn: true, // `false` se você quiser garantir dados frescos
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
