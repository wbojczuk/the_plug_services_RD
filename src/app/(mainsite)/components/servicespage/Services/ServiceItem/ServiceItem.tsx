"use client"
import styles from "./serviceitem.module.css"
import Link from "next/link"

export default function ServiceItem(props: serviceType) {
  return (
    <Link href={"/contact"} className={styles.serviceItem}>
        <div className={styles.icon}>
            {props.icon}
        </div>
        <h5>{props.title}</h5>
        <p>{props.description}</p>

        <span className={styles.hire}>Hire Now</span>
    </Link>
  )
}
