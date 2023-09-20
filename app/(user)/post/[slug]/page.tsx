import urlFor from "@/lib/UrlFor"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { RichTextComponent } from "@/app/_components/RichTextComponent"

type Props = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const query = groq`
    *[_type=='post']
    {
        slug
    }
    `
    const slugs: Post[] = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current)
    return slugRoutes.map((slug) => ({
        slug
    }))
}

async function Page({ params: { slug } }: Props) {
    const query = groq`
    *[_type=='post'&& slug.current==$slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `
    const post: Post = await client.fetch(query, { slug })
    return (
        <article className="md:px-10 pb-28 mt-20 md:max-w-5xl mx-auto px-4">
            <section className=" flex flex-col gap-5">
                <h1 className="md:text-5xl py-10 font-bold text-purple-400 text-3xl text-center">{post.title}</h1>
                <section className="bg-gray-800 p-3 rounded-t-xl mb-5">
                    <div className="flex gap-3 items-center">
                        <Image src={urlFor(post.author.image).toString()} alt={post.author.name} height={100} width={100} className="h-10 w-10 rounded-full" />
                        <div>
                            <p>{post.author.name}</p>
                            <i className="text-sm text-gray-400">date: {post._createdAt.split("T")[0]}</i>
                        </div>

                    </div>
                </section>
                <div className="">
                    <Image src={urlFor(post.mainImage).toString()} alt={post.author.name} className="object-cover object-center mx-auto" height={600} width={600} />
                </div>
                <PortableText value={post.body} components={RichTextComponent} />
            </section>
        </article>
    )
}

export default Page