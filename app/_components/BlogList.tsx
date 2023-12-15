"use client";
import urlFor from "@/lib/UrlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

interface Props {
  posts: Post[];
}

function BlogList({ posts }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-20">
      <div className="flex flex-col items-center gap-5">
        <p className="font-extrabold font-serif w-full">Hii I am</p>
        <p className="font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Digvijay Edake
        </p>
        <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 text-center">
          A full stack Web-Mobile Developer
        </p>
      </div>
      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mt-10">
        HERE ARE MY PROJECTS
      </p>
      <div className="w-[70vw] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts?.map((post) => (
            <Link
              href={`/post/${post.slug.current}`}
              key={post._id}
              className="rounded-lg"
            >
              <div
                key={post._id}
                className="group flex flex-col cursor-pointer md:max-w-xl "
              >
                <div className="relative w-full md:h-80 drop-shadow-lg group-hover:scale-105 transition-transform duration-500 ease-in-out h-60 ">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    fill
                    alt={post.title}
                    className="object-cover object-center rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-50 bg-black backdrop-blur-lg rounded shadow-lg text-white p-5 flex justify-between">
                    <p className="font-bold text-white">{post.title}</p>
                  </div>
                </div>
                <div className="pt-3 flex-1 rounded-b-lg">
                  <button className="flex items-center gap-2 bg-stone-800 rounded-lg px-4">
                    view
                    <RxArrowTopRight />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;

/** */
