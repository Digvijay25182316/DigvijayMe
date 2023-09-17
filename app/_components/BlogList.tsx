"use client"
import urlFor from '@/lib/UrlFor'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    posts: Post[]
}

function BlogList({ posts }: Props) {
    return (
        <div className='mt-20 md:max-w-[70vw] flex justify-center m-auto max-w-[90vw]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-5'>
                {posts?.map(post => (
                    <Link href={`/post/${post.slug.current}`} key={post._id} className='rounded-lg'>
                        <div key={post._id} className='group flex flex-col cursor-pointer md:max-w-xl '>
                            <div className='relative w-full md:h-80 drop-shadow-lg group-hover:scale-105 transition-transform duration-200 ease-in-out h-72 '>
                                <Image src={urlFor(post.mainImage).url()}
                                    fill
                                    alt={post.title}
                                    className='object-cover object-center'
                                />
                                <div className='absolute bottom-0 w-full bg-opacity-50 bg-black backdrop-blur-lg rounded shadow-lg text-white p-5 flex justify-between'>
                                    <div>
                                        <p className='font-bold text-white'>{post.title}</p>
                                        <p>{new Date(post._createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                    </div>
                                    <div className='flex flex-col gap-3'>{post.categories?.map(category =>
                                        <div key={category._id} className='bg-yellow-400 text-center px-2  rounded-full'>{category.title}</div>
                                    )}</div>
                                </div>
                            </div>
                            <div className='mt-5 flex-1'>
                                <p className='p-2'>{post.title}</p>
                                <p className='p-2 line-clamp-2'>{post.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}</div>
        </div>
    )
}

export default BlogList