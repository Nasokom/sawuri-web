import { client } from "@/Utils/sanity/sanityClient";

export default async function getnews(req,res){

    const data = await client.fetch("*[_type == 'mail']");

    return res.send(data); 
}
