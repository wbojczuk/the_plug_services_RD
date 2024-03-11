"use client"
import Link from "next/link"
import styles from "./aboutus.module.css"

export default function AboutUs() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/aboutus-bg.png" width={360} height={600} alt="Featured Service Image" />
        </div>
        

        <div className={styles.content}>
            <h2><span className="underline">About</span>&nbsp;<span className="highlight">The Plug</span></h2>

            <p>The Plug is your go-to outsourcing partner, delivering cost-effective, tailored solutions across customer service, IT, human resources, marketing, and beyond. <br /><br /> We ensure your business thrives by meeting your unique needs with precision and efficiency. Simplify your operations and boost your success with The Plug.
            </p>

            <Link className="main-link" href={"/contact"}>Let's Talk!</Link>

        </div>
    </section>
  )
}
