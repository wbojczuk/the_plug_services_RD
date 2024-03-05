import styles from "./faster.module.css"

export default function Faster() {
  return (
    <div className={styles.faster}>
        <div className={styles.fasterItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M219.68 117.26a12 12 0 0 0-7.47-8.5l-54.44-20.41l14-70a12 12 0 0 0-20.54-10.54l-112 120a12 12 0 0 0 4.56 19.43l54.44 20.41l-14 70a12 12 0 0 0 20.54 10.54l112-120a12 12 0 0 0 2.91-10.93m-103.63 83.67l7.72-38.58a12 12 0 0 0-7.56-13.59L69 131.07l70.93-76l-7.72 38.58a12 12 0 0 0 7.56 13.59L187 124.93Z"></path></svg>
            <h3>Versatile</h3>
            <span>Delegate various functions, such as customer service, IT support, or manufacturing, to external vendors, thereby enabling you to streamline operations, reduce overhead costs, and scale more efficiently.</span>
        </div>
        <div className={styles.fasterItem}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9a7 7 0 1 0-10.974 5.76L5 20l2.256.093L8.464 22l3.466-6.004c.024 0 .046.004.07.004s.046-.003.07-.004L15.536 22l1.232-1.866L19 20l-3.026-5.24A6.99 6.99 0 0 0 19 9M7 9a5 5 0 1 1 5 5a5 5 0 0 1-5-5"></path><circle cx={12} cy={9} r={3} fill="currentColor"></circle></svg>
            <h3>Strategic</h3>
            <span>Enables your organization to leverage external expertise, streamline operations, enhance scalability, and gain competitive advantages while focusing on core business objectives.</span>
        </div>
        <div className={styles.fasterItem}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h2v4.081L11.101 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2"></path><path fill="currentColor" d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2"></path></svg>
            <h3>Solution-oriented</h3>
            <span>Provides your business with access to expert resources, specialized skills, and efficient processes, enabling you to address specific challenges and achieve targeted goals effectively and efficiently.</span>
        </div>
    </div>
  )
}
