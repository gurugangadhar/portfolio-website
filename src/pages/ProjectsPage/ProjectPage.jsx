import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import techfestIMG from "../../assets/techfest.png";
import foodIMG from "../../assets/fooddelevary.png";
import weatherAppImg from '../../assets/weaht.png'
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ExamPotal from "../../assets/Examportal.png"

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            <ProjectCard
              previewLink={"https://www.linkedin.com/posts/guru-gangadhar19_secureexamportal-codeathon2k25-webdevelopment-activity-7335681790075916290-NkFX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeCiywBsOhu1eLWckr2gW6469LWO1ZSjlc"}
              githubLink={"https://github.com/gurugangadhar/Test"}
              projectName={"Secure Exam Portal"}
              projectDetails={
                "a fully functional exam management system enabling seamless exam creation, student access, and automatic result evaluation."
              }
              demoImage={ExamPotal}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg",
                "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",

              ]}
            />

            <ProjectCard
              previewLink={"https://gurugangadhar.github.io/food-delevary/"}
              githubLink={"https://github.com/gurugangadhar/food-delevary"}
              projectName={"Foodie"}
              projectDetails={
                "This Foodie site that allows users to browse and order food from the restaurant. It features a user-friendly interface, real-time updates, and secure payment options."
              }
              demoImage={foodIMG}
              skill_img={[
               
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            <ProjectCard
              previewLink={"https://gurugangadhar.github.io/Weather/"}
              githubLink={
                "https://github.com/gurugangadhar/Weather/"
              }
              projectName={"Weather App"}
              projectDetails={
                "This is Weather App for you to see how the day is going. Interactive Web Application based on API Data fetching."
              }
              demoImage={weatherAppImg}
              skill_img={[
           
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
               
              ]}
            />

            <ProjectCard
              previewLink={"https://kaif-g.github.io/Trishna/"}
              githubLink={"https://github.com/gurugangadhar/Trishna-2k24"}
              projectName={"Tech Fest Webpage"}
              projectDetails={
                "These is a Technical Fest webpage designed for a college event, showcasing the event details, schedule, and registration information. It is built using React.js, HTML, CSS, and JavaScript."
              }
              demoImage={techfestIMG}
              key={"Team Trackr App"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            
           
           
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
