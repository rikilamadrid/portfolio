import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  // projectId: process.env.SANITY_ID,
  projectId: '1rv0v8ta',
  dataset: 'production',
  apiVersion: '2022-12-14',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);