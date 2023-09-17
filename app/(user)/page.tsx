import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { draftMode } from "next/headers";
import PreviewProvider from '../_components/PreviewProvider'
import PreviewBlogList from "../_components/PreviewBlogList";
import BlogList from "../_components/BlogList";

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`

export default async function Home() {
  const preview = draftMode().isEnabled ? { token: process.env.SANITY_API_READ_TOKEN } : undefined

  const data = await client.fetch(query)

  if (preview) {
    return (
      <PreviewProvider >
        <PreviewBlogList query={query} initialData={data} />
      </PreviewProvider>
    )
  }

  return (
    <BlogList posts={data} />)
}