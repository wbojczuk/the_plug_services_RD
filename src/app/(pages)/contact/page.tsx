import type { Metadata } from "next"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import ContactInfo from "@/app/(mainsite)/components/contactpage/ContactInfo/ContactInfo"

export const metadata: Metadata = {
    title: "Contact Page | The Plug Outsourcing",
    description: ""
}

export default function ContactPage(){
    return(
        <>
            <PageTitle pageTitle="Contact" />
            <ContactInfo />
        </>
    )
}