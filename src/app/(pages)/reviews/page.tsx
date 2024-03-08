import type { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import ReviewsHeader from "@/app/(mainsite)/components/reviewspage/ReviewsHeader/ReviewsHeader"
import Reviews from "@/app/(mainsite)/components/reviewspage/Reviews/Reviews"



export const metadata: Metadata = {
    title: "Our Reviews",
    description: ""
}

export default function ReviewPage(){
    return(
        <>
            <PageTitle pageTitle="Reviews" />
            <ReviewsHeader />
            <Reviews />
        </>
    )
}