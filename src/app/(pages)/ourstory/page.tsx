import type { Metadata } from "next"
import OurStory from "@/app/(mainsite)/components/ourstorypage/OurStory/OurStory"

export const metadata: Metadata = {
    title: "Our Story | The Plug Outsourcing",
    description: ""
}

export default function OurStoryPage(){
    return(
        <>
            <OurStory />
        </>
    )
}