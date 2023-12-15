import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

import BlogList from "../_components/BlogList";

const query = groq`
*[_type=='projects']{
  title,
  mainImage,
  ...,
}
`;

export default async function Home() {
  const data = await client.fetch(query);

  return <BlogList posts={data} />;
}
