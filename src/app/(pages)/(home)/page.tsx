import Header from "@/app/(mainsite)/components/homepage/Header/Header"
import Trusted from "@/app/(mainsite)/components/homepage/Trusted/Trusted"
import WhyChooseUs from "@/app/(mainsite)/components/homepage/WhyChooseUs/WhyChooseUs"
import Faster from "@/app/(mainsite)/components/homepage/Faster/Faster"
import WhyOutsource from "@/app/(mainsite)/components/homepage/WhyOutsource/WhyOutsource"
import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs"

export default function Home() {
  return (
    <>
      <Header />
      <Trusted />
      <WhyChooseUs imgSrc="/img/shake-hands.png" />
      <Faster />
      <WhyOutsource />
      <AboutUs imgSrc="/img/aboutus-bg.png" />
    </>
  )
}
