import React, {  useState,useRef, useEffect } from "react";
import styles from "./EmailComponent.module.css";
import Mail from "../../assets/mail.svg";
import emailjs from '@emailjs/browser';
import AlertBox from "../AlertBox/AlertBox";
import Loader from "../Loader/Loader";

function EmailComponent({ prefilledMessage = "" }) {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [viewLoader, setViewLoader] = useState(false)
  const [viewAlert, setViewAlert] = useState(false)

  const form = useRef();

  // Set prefilled message when component mounts or prop changes
  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
    }
  }, [prefilledMessage]);

  const sendEmail = (e) => {
    e.preventDefault();
    setViewLoader(true)
    

    // These are the service ID , template ID and public key 
    const service_ID  = "service_7svggki"
    const template_ID = "template_pkacvs9"
    const public_key  = "QSWKFQ5w1gC-JwDQ5"

    // A new object that will  container the dynamic template parameters 
    const template = {
      from_name : fname,
      user_email: email,
      to_name : "Guru Gangadhar Reddy",
      message: message,
    }
    //  Now sending the email using email.js 

    emailjs.send(service_ID, template_ID,template, public_key)
    .then((response)=>{
      console.log("Sucessfull", response)
      setViewLoader(false)
      setViewAlert(true)
      setFname("")
      setEmail("")
      setMessage("")
    })
    .catch((error)=>{
      console.log(error)
    })


  
  };
  return (
    <div className={styles.email_component}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Send me a Message</h1>
        <img src={Mail} alt="" className={styles.header_img} />
      </div>
      <form  className={styles.form} onSubmit={sendEmail}>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="name">Full Name</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Full Name"
              name="from_name"
              value={fname}
              required
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <label htmlFor="email">Email Address</label>
            <input
              className={`${styles.input} ${styles.email_input}`}
              type="email"
              placeholder="Enter your email address"
              value={email}
              name="user_email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
        </div>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.message_input_section}`}>
            <label htmlFor="message"> Enter your Message</label>
            <textarea
              className={styles.input}
              name="message"
              id="message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              cols="30"
              rows="10"
              required
              placeholder="This is my message for you"
            ></textarea>
          </div>
        </div>
        <button className={styles.submit_btn} type="submit"> 
        <i className="fa fa-send-o"></i>
        </button>
      </form>
     
      {
        viewLoader && <Loader/>
      }
      {
        viewAlert &&
      <AlertBox/>
      }
      
    </div>
  );
}

export default EmailComponent;
