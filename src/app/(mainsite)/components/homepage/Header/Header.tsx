"use client"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
  return (
    <header className={styles.header}>

        <h1>The Plug</h1>
        <h3>We outsource for you</h3>

        <p>The Plug specializes in providing comprehensive outsourcing services to businesses, delivering seamless solutions to enhance efficiency, reduce overhead costs, and drive growth.</p>

        <Link href="/contact" className="main-link">Get started</Link>

        <img style={{objectPosition: "top"}} src="/img/header-bg.png" alt="Abstract Background" className={`bg-img ${styles.bgImg}`} />
    </header>
  )
}
