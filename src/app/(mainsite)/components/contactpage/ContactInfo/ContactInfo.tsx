import styles from "./contactinfo.module.css"
import FreeEstimateForm from "../FreeEstimateForm/FreeEstimateForm"
export default function ContactInfo() {
  return (
    <section className={styles.contactInfo}>
        <div className={styles.formWrapper}>
          <h2>Get in touch</h2>
          <p>Contact us to get started. We’re always happy to provide a free consultation and help out with any questions you may have.</p>
          <FreeEstimateForm />
        </div>
        <div className={styles.imgWrapper}>

            <div className={styles.contentWrapper}>
              <h5>Email</h5>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
            </div>

            <div className={styles.contentWrapper}>
              <h5>Phone Number</h5>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
            </div>

            <img src="/img/contact-img.png" alt="Abstract Black background" className="bg-img" />
            <div className="shader"></div>
        </div>
    </section>
  )
}
