"use client"

import styles from "./footer.module.css"
import Link from "next/link"
import Image from "next/image"
import { InlineIcon } from "@iconify/react"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <img src="/img/logo.webp" alt="logo" className={styles.logo} />

        <div className={styles.links}>
          <aside>
              <h3 className={styles.listTitle}>Quick Links</h3>
              <ul className={styles.list}>
                
                <li className={styles.listItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/services">Services</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/contact">Contact</Link>
                </li>

              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Categories</h3>
              <ul className={styles.list}>

                <span className={styles.listItem}>Business Outsourcing</span>
                <span className={styles.listItem}>Outsourcing</span>
                <span className={styles.listItem}>Marketing</span>
              
              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Contact</h3>
              <ul className={styles.list}>

                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:phone"} width="50px" height="50px" />
                  <a href={"tel:" + process.env.NEXT_PUBLIC_PHONE_NUM} target="_blank">{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:email"} width="50px" height="50px" />
                  <a href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL_ADDRESS} target="_blank">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:map-marker"} width="50px" height="50px" />
                  <a href="https://google.com" target="_blank">{process.env.NEXT_PUBLIC_BUSINESS_CITY_STATE}</a>
                </aside>

              </ul>
            </aside>
          </div>

      </div>
      
      <div className={styles.copyrighttwo}>The Plug. Copyright © 2024 to Present</div>
      <div className={styles.copyright}>© Copyright 2024 to Present - <a href="https://www.romedigital.co" target="_blank">Rome Digital</a></div>
        
       
    </footer>
  )
}
