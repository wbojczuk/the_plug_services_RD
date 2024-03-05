import styles from "./whyoutsource.module.css"

export default function WhyOutsource() {
  return (
    <section className={styles.whyOutsource}>
        <h1><span className="underline">Why Outsource?</span></h1>
        <div className={styles.reasons}>
            <div className={styles.reasonItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="M10.326.28a.5.5 0 0 1 .506-.229l2.571.429a.5.5 0 0 1 .411.575l-.428 2.572a.5.5 0 0 1-.9.208l-.694-.97l-3.574 2.284a.75.75 0 0 1-.974-.144l-1.993-2.33L1.524 4.59a.75.75 0 1 1-.686-1.334l4.255-2.187a.75.75 0 0 1 .913.18L7.96 3.534l2.96-1.892l-.577-.807a.5.5 0 0 1-.017-.555M3.78 5.19L.878 6.85A.75.75 0 0 0 .5 7.5v5.75c0 .414.336.75.75.75h2.53zM5.03 14h3.668V7.188l-1.649.824l-1.648-2.884a.747.747 0 0 0-.37-.324V14Zm7.72 0H9.948V6.563l2.467-1.234A.75.75 0 0 1 13.5 6v7.25a.75.75 0 0 1-.75.75" clipRule="evenodd"></path></svg>
                <h4><span className="highlight">Reliability</span> and Quality</h4>
                <p>Depend on consistent, top-notch service that enhances your business efficiency.</p>
            </div>
            <div className={styles.reasonItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1A2.5 2.5 0 0 0 8 3.5V5H4a2 2 0 0 0-2 2v3.8h1.5c1.5 0 2.7 1.2 2.7 2.7c0 1.5-1.2 2.7-2.7 2.7H2V20a2 2 0 0 0 2 2h3.8v-1.5c0-1.5 1.2-2.7 2.7-2.7c1.5 0 2.7 1.2 2.7 2.7V22H17a2 2 0 0 0 2-2v-4h1.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"></path></svg>
                <h4>Industry <span className="highlight">Expertise</span></h4>
                <p>Our seasoned team brings valuable insights and skills across various sectors.</p>
            </div>
            <div className={styles.reasonItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M11.025 21v-2.15q-1.325-.3-2.287-1.15t-1.413-2.4l1.85-.75q.375 1.2 1.113 1.825t1.937.625q1.025 0 1.738-.462t.712-1.438q0-.875-.55-1.387t-2.55-1.163q-2.15-.675-2.95-1.612t-.8-2.288q0-1.625 1.05-2.525t2.15-1.025V3h2v2.1q1.25.2 2.063.913t1.187 1.737l-1.85.8q-.3-.8-.85-1.2t-1.5-.4q-1.1 0-1.675.488T9.825 8.65q0 .825.75 1.3t2.6 1q1.725.5 2.613 1.588t.887 2.512q0 1.775-1.05 2.7t-2.6 1.15V21z"></path></svg>
                <h4>Cost-Effective <span className="highlight">Solutions</span></h4>
                <p>Maximizing your ROI while minimizing expenses.</p>
            </div>
        </div>
    </section>
  )
}
