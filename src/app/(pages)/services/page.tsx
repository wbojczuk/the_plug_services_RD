import type { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import Services from "@/app/(mainsite)/components/servicespage/Services/Services"
import QuoteRibbon from "@/app/(mainsite)/components/servicespage/QuoteRibbon/QuoteRibbon"

export const metadata: Metadata = {
    title: "Services | The Plug",
    description: ""
}

export default function ServicesPage(){
    return(
        <>
            <PageTitle pageTitle="Services" />
            <QuoteRibbon />
            <Services />
        </>
    )
}