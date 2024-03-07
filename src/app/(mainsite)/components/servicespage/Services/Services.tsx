import styles from "./services.module.css"
import ServiceItem from "./ServiceItem/ServiceItem"
import serviceData from "@/app/(mainsite)/data/serviceData"

export default function Services() {

  const serviceElems =  serviceData.map((data, i)=>{
    return <ServiceItem key={i} {...data} />
  })

  return (
    <section className={styles.services}>
      {serviceElems}
    </section>
  )
}
