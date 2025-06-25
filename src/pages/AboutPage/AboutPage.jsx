import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2018 - 2019"}
                  timeline_title={"High School "}
                  location={"Gopi Kirshna, Proddatur"}
                  details={
                    "Completed my High School Degree from State Board with 85%."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2019 - 2021"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"Sri Shirdi Sai Junior College, Proddatur"}
                  details={
                    "Completed my Degree from State Board with 92%."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"2021 - 2025"}
                  timeline_title={"Bachelors in Electronics & Communication"}
                  location={"AITS, Tirupati"}
                  details={
                    "completed my Bachelors Degree in Electronics & Communication from AITS, Tirupati with 8.8 CGPA."
                  }
                 
                />
              </div>
             
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={true}
                  timeline={"Apr - May ( 2025 )"}
                  timeline_title={"SDE Intren"}
                  location={"Bluestock™, Remote"}
                  details={
                    "I have worked as a Software Development Engineer Intern at Bluestock, I have worked on IPO Web Application & REST API Development."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2024 - 2025 ( April )"}
                  timeline_title={"Full Stack & Javascript Intern"}
                  location={"Slash Mark IT Solutions (OPC) Pvt.Ltd, Remote"}
                  details={
                    "I have worked as a Full Stack & Javascript Intern at SlashMark on Web Application Development using ReactJS, NodeJS, ExpressJS and MongoDB."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.left_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2024"}
                  timeline_title={"Lead Organizer"}
                  location={"Trishna 2K24 - Technical Fest @AITS,Tirupati"}
                  details={
                    "As a Lead Organizer, I managed the event, coordinating with teams, and ensuring the smooth execution of various technical events."
                  }
                />
              </div>
              <div
                className={`${style.action_container} ${style.right_container}`}
              >
                <ActionBox
                  isleft={false}
                  timeline={"2025"}
                  timeline_title={"Technical Lead"}
                  location={"CODEATHON 2K25 - Hackathon @AITS,Tirupati"}
                  details={
                    "As a Technical Lead, I am responsible for designing of exam portal (Webpage) and managing the technical aspects of the hackatho."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
