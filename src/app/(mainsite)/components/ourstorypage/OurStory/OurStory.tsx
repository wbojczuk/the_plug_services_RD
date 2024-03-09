import styles from "./ourstory.module.css"

export default function OurStory() {
  return (
    <section className={styles.ourStory}>
        <div className={styles.textWrapper}>
            <h1>Our Story</h1>
            <p>From the get-go, The Plug was more than just a business idea—it was a mission to disrupt the traditional outsourcing model. Founded by visionaries who understood the challenges and potentials of international talent acquisition, The Plug sets out to redefine what businesses in the US could expect when seeking offshore professionals. By focusing on rich talent pools from top leading countries, we've not only opened doors to exceptional skills but have also fostered a culture of mutual growth and understanding.<br /><br />
Our evolution from a startup to a key player in the outsourcing industry is a story of ambition, innovation, and hard-won success. It's a narrative that reflects our dedication to not just meeting but exceeding the expectations of our clients. At The Plug, we believe in creating stories of success, not just for ourselves, but for every business and professional we connect.</p>
        </div>
        <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
                <img src="/img/our-story-bg.png" alt="photo of a city view" className={styles.bgImg} />
            </div>
        </div>
    </section>
  )
}
