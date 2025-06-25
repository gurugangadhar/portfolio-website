import Navbar from "../../Components/Navbar/Navbar";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import {motion} from 'framer-motion'
import styles from "./Contact.module.css";

import EmailComponent from "../../Components/EmailComponent/EmailComponent";
import Circle from "../../Components/Circle/Circle";

function Contact() {
  return (
    <div>
      <Navbar />
      <Circle top={"-5rem"} right={"-18rem"}/>
      <MainContainer>
        <ComponentTitle title={"Get in touch"} />
        <div className={styles.box}>
          <div className={styles.left_section_indexing}>
            <EmailComponent/>
          </div>
          <div className={styles.right_section_indexing}>
           
            {/* Location Section  */}
            <div className={styles.location_services}>
            <div className={styles.symbol}>
                <i className={`fa-solid fa-location-dot`}></i>
              </div>
              <p>House - 26/913-8, Nagendra Nagar, VTC: Proddatur, PO: Proddatur, Sub District: Proddatur, District: Cuddapah, State: Andhra Pradesh, PIN Code: 516360,</p>
            </div>

            {/* Phone Services  */}
            <div className={styles.location_services}>
              <div className={styles.symbol}>
                <i className={`fa-solid fa-phone`}></i>
              </div>

              <p>9059694801</p>
            </div>
            {/* Follow me Section  */}
            <div className={styles.follow_me_section}>
              <p>Follow me on </p>
              <div className={styles.account_box}>
                {/* this is my linked in platfrom  */}
                <div className={styles.account_icon}>
                  <a
                    href="https://www.linkedin.com/in/guru-gangadhar19"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>

                <div className={styles.account_icon}>
                  <a
                    href="mailto:gurugangadharreddy19@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
                {/* This is my github platform  */}

                <div className={styles.account_icon}>
                  <a
                    href="https://github.com/gurugangadhar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
                {/* This is my instagram handle  */}
                <div className={styles.account_icon}>
                  <a
                    href="https://www.instagram.com/gurugangadhar_1516"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Contact;
