import urlFor from "@/lib/UrlFor";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/app/_components/RichTextComponent";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const query = groq`
    *[_type=='projects']
    {
        slug
    }
    `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Page({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='projects'&& slug.current==$slug][0]
    {
        ...,
        title,
        url,
    }
    `;
  const post: Post = await client.fetch(query, { slug });
  return (
    <article className="md:px-10 pb-28 mt-20 md:max-w-5xl mx-auto px-4">
      <section className=" flex flex-col gap-5">
        <h1 className="md:text-5xl pt-10 pb-5 font-bold text-purple-400 text-3xl text-center">
          {post.title}
        </h1>
        <div className="flex justify-center">
          <Link href={`${post.url}`}>
            <button className="bg-gradient-to-r from-blue-600 to-pink-600 max-w-max text-2xl font-bold px-5 py-2 rounded-lg">
              View Project
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src={urlFor(post.mainImage).toString()}
            alt={"post"}
            height={400}
            width={600}
            className="h-96 w-[600px]"
            loading="lazy"
          />
        </div>

        <PortableText value={post.body} components={RichTextComponent} />
      </section>
    </article>
  );
}

export default Page;
