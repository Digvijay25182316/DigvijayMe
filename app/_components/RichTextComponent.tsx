import urlFor from "@/lib/UrlFor";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full m-5 md:h-96 h-72 md:m-10 mx-auto">
          <Image
            src={urlFor(value).toString()}
            className="object-contain"
            alt="blog post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-3">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-5 mt-lg list-decimal p-2">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="md:text-5xl text-4xl md:py-10 py-5 font-bold text-gray-600">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="md:text-4xl text-3xl md:py-10 py-5 font-bold text-gray-600">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="md:text-3xl text-2xl md:py-10 py-5 font-bold text-gray-600">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="md:text-2xl text-xl md:py-10 py-5 font-bold text-gray-600">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-l-gray-700 bg-gray-800 p-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "moreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};
