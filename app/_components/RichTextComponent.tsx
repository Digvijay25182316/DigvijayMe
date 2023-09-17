import urlFor from '@/lib/UrlFor'
import Image from 'next/image'
import Link from 'next/link'


export const RichTextComponent = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative w-full h-96 m-10 mx-auto'>
                    <Image src={urlFor(value).toString()} className='object-contain' alt='blog post image' fill />
                </div>
            )

        }
    }, list: {
        bullet: ({ children }: any) => (
            <ul className='ml-10 py-5 list-disc space-y-3'>{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className='mt-lg list-decimal p-1'>{children}</ol>
        )
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className='text-5xl py-10 font-bold text-yellow-200'>{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className='text-4xl py-10 font-bold text-yellow-200'>{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className='text-3xl py-10 font-bold text-yellow-200'>{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className='text-2xl py-10 font-bold text-yellow-200'>{children}</h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote className='border-l-4 border-l-gray-700 bg-gray-800 pl-3'>{children}</blockquote>
        )
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? 'moreferrer noopener' : undefined

            return (
                <Link href={value.href} rel={rel} className='underline hover:decoration-black'>
                    {children}
                </Link>
            )
        }
    }
}