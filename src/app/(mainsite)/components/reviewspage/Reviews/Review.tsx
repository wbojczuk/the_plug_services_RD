"use client"
import styles from "./reviews.module.css"

export default function Review(props: reviewType) {
  return (
    <aside className={styles.review}>
        <div className={styles.iconWrapper}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.25 3.75h-4.5v5.5c0 3.5 2.5 4.5 4.5 4c-1.5-1.5-1.5-2.5-1.5-4h1.5zm7 0h-4.5v5.5c0 3.5 2.5 4.5 4.5 4c-1.5-1.5-1.5-2.5-1.5-4h1.5z"></path></svg></div>

        <h3>{props.title}</h3>

        <p>{props.desc}</p>

        <span>- {props.name} - {props.role}</span>
    </aside>
  )
}
