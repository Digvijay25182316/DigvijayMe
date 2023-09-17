import { apiVersion, dataset, projectId } from "@/sanity/env";
import { createClient } from "next-sanity";

const token= process.env.SANITY_API_READ_TOKEN

export const client =createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn:false
})