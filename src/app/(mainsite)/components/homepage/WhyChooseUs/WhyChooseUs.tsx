"use client"
import { InlineIcon } from "@iconify/react"
import styles from "./whychooseus.module.css"
import Image from "next/image"

export default function WhyChooseUs(props: {imgSrc: string}) {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <Image className={styles.img} src={props.imgSrc} width={360} height={600} alt="Featured Service Image" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">Why</span> Choose Us?</h2>

            <p>In today's fast-paced and competitive business environment, efficiency is not just an advantage; it's a necessity. <br /><br /> That's where we come in. As your premier business outsourcing partner, we are committed to providing top-tier services that drive growth, enhance productivity, and most importantly, optimize your costs.
            </p>
        </div>
    </section>
  )
}
