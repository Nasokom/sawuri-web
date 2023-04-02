import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { NextApiRequest, NextApiResponse } from 'next';

export const client = createClient({
    projectId: "dl90k7aq",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: false
  });

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

/* export default async function videoHandler(id, res) {
  try {
  // récupérer l'identifiant de la vidéo
    const video = await client.getDocument(id); // récupérer la vidéo à partir de Sanity

    const { url } = video.asset; // récupérer l'URL de la vidéo

    res.setHeader('Content-Type', 'video/mp4'); // définir l'en-tête de la réponse HTTP
    res.status(200).send(await fetch(url).then(res => res.body)); // servir la vidéo en tant que réponse HTTP
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving video' });
  }
} */


export const  urlForVid = (asset)=> {
  return client
    .fileAsset(asset)
    .url();
}