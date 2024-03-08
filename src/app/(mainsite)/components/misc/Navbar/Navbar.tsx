"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import NavMultiOption from "./NavMultiOption"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnTouch, setIsOnTouch] = useState(false)
  const [isOnMobile, setIsOnMobile] = useState(false) 
  const [isTopBarOpen, setIsTopBarOpen] = useState(true)


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const ourStoryRef: any = useRef()
  const contactRef: any = useRef()
  const servicesRef: any = useRef()
  const reviewsRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()
  const content2Ref: any = useRef()
  const topBarRef: any = useRef()
  const navRef: any = useRef()


  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/services"],
      ref: servicesRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    },
    {
      triggers: ["/reviews"],
      ref: reviewsRef
    },
    {
      triggers: ["/ourstory"],
      ref: ourStoryRef
    }
    
  ]

  const pathname = usePathname()

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches
    setIsOnTouch(isOnTouch)
    setIsOnMobile(window.matchMedia("(max-width: 649px)").matches)

    if(window.scrollY > 10){
      navbarAnimIn()
     }else{
       navbarAnimOut()
     }

    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 10){
       navbarAnimIn()
      }else{
        navbarAnimOut()
      }
    })

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])


  function navbarAnimIn(){
    const topbarStyles = window.getComputedStyle(topBarRef.current)
    const topAmt = parseFloat(topbarStyles.height) + parseFloat(topbarStyles.paddingTop) + parseFloat(topbarStyles.paddingBottom)
    navRef.current.style.transform = `translateY(-${topAmt}px)`
  }

  function navbarAnimOut(){
    navRef.current.style.transform = "translateY(0)"
  }


  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleY(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleY(1)"
  }
  
  const hamburgerClass = "hamburger--collapse"
  /* Here’s the list of hamburger-type classes you can choose from:

        hamburger--3dx
        hamburger--3dx-r
        hamburger--3dy
        hamburger--3dy-r
        hamburger--3dxy
        hamburger--3dxy-r
        hamburger--arrow
        hamburger--arrow-r
        hamburger--arrowalt
        hamburger--arrowalt-r
        hamburger--arrowturn
        hamburger--arrowturn-r
        hamburger--boring
        hamburger--collapse
        hamburger--collapse-r
        hamburger--elastic
        hamburger--elastic-r
        hamburger--emphatic
        hamburger--emphatic-r
        hamburger--minus
        hamburger--slider
        hamburger--slider-r
        hamburger--spin
        hamburger--spin-r
        hamburger--spring
        hamburger--spring-r
        hamburger--stand
        hamburger--stand-r
        hamburger--squeeze
        hamburger--vortex
        hamburger--vortex-r */


  return (
    <nav ref={navRef} className={styles.mainNav}>

<div ref={topBarRef} className={styles.topBar}>
<span className={styles.topBarText}>Outsource your business with The Plug!</span>

<div className={styles.topBarLinks}>
  <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"></path></svg>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>

  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>

  
  
</div>
</div>

      <div className={styles.navContent}>
      <Link href="/" className={styles.logo}>
        <img className={styles.logoImg} src="/img/logo.webp" alt="logo" />
      </Link>


      <div className={styles.contentWrapper}>
      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className={`hamburger ${hamburgerClass} mobile tablet nav-noclose`} type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        <div ref={content2Ref} className={styles.content}>
          <ul ref={contentRef} className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          ref={homeRef}
          />

          {/* <NavOption
          title="About"
          url="/about"
          ref={aboutRef}
          /> */}

          <NavOption
          title="Services"
          url="/services"
          ref={servicesRef}
          />

          <NavOption
          title="Our Story"
          url="/ourstory"
          ref={ourStoryRef}
          />

          <NavOption
          title="Reviews"
          url="/reviews"
          ref={reviewsRef}
          />

          <NavOption
          title="Contact"
          url="/contact"
          ref={contactRef}
          />

          </ul>

          {/* ******* PUT SHOPIFY CART HERE ******** */}

        </div>
        
        </div>
      </div>

      
    </nav>
  )
}
