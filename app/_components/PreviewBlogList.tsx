"use client"

import { useLiveQuery } from "next-sanity/preview"
import BlogList from "./BlogList"

type Prop = {
    query: string
    initialData: Post[]
}
function PreviewBlogList({ query, initialData }: Prop) {
    const [data, loading] = useLiveQuery(initialData, query)
    if (loading) {
        return <>Loading...</>
    }
    return (
        <BlogList posts={data} />
    )
}

export default PreviewBlogList