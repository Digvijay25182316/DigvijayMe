"use client"
import { LiveQueryProvider } from 'next-sanity/preview'
import { client } from '@/lib/sanity.client'

export default function PreviewProvider({
    children }: {
        children: React.ReactNode
    }) {
    return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}