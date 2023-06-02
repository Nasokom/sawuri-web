import { client } from "@/Utils/sanity/sanityClient";

export default async function getnews(req,res){

    const data = await client.fetch("*[_type == 'news' && actif == true]");

    return res.send(data); 
}