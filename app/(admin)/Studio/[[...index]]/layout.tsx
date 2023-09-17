"use client"
import './globals.css'
import sanityConfig from "@/sanity.config"
import { NextStudioLayout } from "next-sanity/studio"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <NextStudioLayout config={sanityConfig}>
                    {children}
                </NextStudioLayout>
            </body>
        </html>
    )
}