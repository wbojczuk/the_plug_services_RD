import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <div className={styles.pageTitle}>
        <h1 className="underline">{props.pageTitle}</h1>
        <img src="/img/page-title-bg.png" aria-hidden className="bg-img" />
    </div>
  )
}
