"use client"

import { useEffect, useRef, useState } from "react"
import "./freeestimateform.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();
    const [currentDate, setCurrentDate] = useState("")

    useEffect(()=>{
        var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
        var localISOString = new Date(Date.now() - tzoffset)
          .toISOString()
          .slice(0, -1);
      
        // convert to YYYY-MM-DDTHH:MM
        const datetimeInputString = localISOString.substring(
          0,
          ((localISOString.indexOf("T") | 0) + 6) | 0
        );
        setCurrentDate(datetimeInputString)
    }, [])


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{

        const obj = Object.fromEntries(new FormData(formRef.current))
        //@ts-ignore
        obj.Contact_Time = new Date(obj.Contact_Time).toLocaleString("en-US", {timeZone: "America/New_York"});
        
        sendEmail(evt, setStatus, {
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        recieverName: process.env.NEXT_PUBLIC_DELIVERY_EMAIL_RECIEVER!,
        data: obj
    }, formRef.current)}}>

        {/* START FIELDS */}
            
       
            <div className="input-wrapper">
                
            <input className="half-input" required type="text" name="First_Name" id="nameInput1" placeholder={"First name"} />
            <input className="half-input" required type="text" name="Last_Name" id="nameInput2" placeholder={"Last name"} />
            </div>
            
            <div className="input-wrapper">
               
                <input className="half-input" required type="tel" name="Phone_Number" id="phoneNumberInput" placeholder={"Phone Number"} />
                <input className="half-input" required type="email" name="Email" id="emailInput" placeholder={"Email Address"} />
            </div>
            <div className="input-wrapper">
               
            <input required type="text" name="What_Services" id="service input" placeholder={"What Services Are You Interested In?"} />
            </div>

            <div className="input-wrapper">
                <label className="date-input-label">Good Contact Time:</label>
                <input defaultValue={currentDate} className="date-input" required type="datetime-local" name="Contact_Time" id="dateInput"/>
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={5000} name="Details" id="messageInput" placeholder={"Additional details..."}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link" id="estimateFormSubmit" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
