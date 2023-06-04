import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: "dl90k7aq",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);



export const  urlForVid = (asset)=> {
  return client
    .fileAsset(asset)
    .url();
}