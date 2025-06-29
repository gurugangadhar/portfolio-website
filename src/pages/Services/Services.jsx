import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import ComponentTitle from '../../Components/ComponentTitle/ComponentTitle';

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Modern, responsive web designs that captivate your audience and drive conversions.",
      icon: "https://www.theme-junkie.com/wp-content/uploads/sketch-web-design-templates-6.jpeg",
      technologies: [
        "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
        "https://cdn.worldvectorlogo.com/logos/html-1.svg",
        "https://cdn.worldvectorlogo.com/logos/css-3.svg"
      ],
      color: "#3498db",
      contactMessage: "Hi! I'm interested in collaborating on a Web Design project. I would love to discuss creating a modern, responsive website that captivates audiences and drives conversions. Let's create something amazing together!"
    },
    {
      id: 2,
      title: "Logo Design",
      description: "Creative and memorable logo designs that represent your brand identity perfectly.",
      icon: "https://www.seoclerk.com/pics/000/974/156/46068f298824119aad3b46ea39ceff72.jpg",
      technologies: [
        "https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg",
        "https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg",
        "https://cdn.worldvectorlogo.com/logos/canva-1.svg"
      ],
      color: "#e74c3c",
      contactMessage: "Hello! I'm looking for a creative Logo Design that perfectly represents my brand identity. I'd like to collaborate on creating a memorable and impactful logo that stands out. Looking forward to hearing from you!"
    },
    {
      id: 3,
      title: "Video Editing",
      description: "Professional video editing services for content creation and marketing campaigns.",
      icon: "https://d1bltcifwhkdae.cloudfront.net/uploads/Header-Artwork-1024x716.png",
      technologies: [
        "https://cdn.worldvectorlogo.com/logos/capcut-logo-vector.svg",
        "https://cdn.worldvectorlogo.com/logos/after-effects-1.svg",
        "https://freepnglogo.com/images/all_img/1691823085kinemaster-logo-png-download.png",
        "https://cdn.worldvectorlogo.com/logos/canva-1.svg"
      ],
      color: "#9b59b6",
      contactMessage: "Hi there! I'm interested in professional Video Editing services for my content creation and marketing campaigns. I'd love to collaborate on creating engaging video content that tells a compelling story. Let's discuss the possibilities!"
    },
    {
      id: 4,
      title: "Poster Design",
      description: "Eye-catching poster designs for events, marketing, and promotional materials.",
      icon: "https://img.freepik.com/free-psd/business-new-normal-poster-concept_23-2148640794.jpg?w=740&t=st=1652163198~exp=1652163798~hmac=cdf6d8d34f7d71ffb88e642113b94923b0be9bb2a40fa6ff72824b84437bd3b1",
      technologies: [
        "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
        "https://cdn.worldvectorlogo.com/logos/canva-1.svg"
      ],
      color: "#f39c12",
      contactMessage: "Hello! I need eye-catching Poster Design services for my upcoming events and promotional materials. I'm looking to collaborate on creating visually stunning designs that grab attention and communicate effectively. Let's work together!"
    },
    {
      id: 5,
      title: "Database Development",
      description: "Robust database solutions and data management systems for your business needs.",
      icon: "https://d3n817fwly711g.cloudfront.net/uploads/2016/08/New-Colorbar-Database.png",
      technologies: [
        "https://cdn.worldvectorlogo.com/logos/mysql-3.svg",
        "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
        "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
        "https://cdn.worldvectorlogo.com/logos/firebase-1.svg"
      ],
      color: "#27ae60",
      contactMessage: "Hi! I'm interested in Database Development services for robust data management solutions. I need help creating efficient database systems that meet my business requirements. I'd love to collaborate on this technical project!"
    },
    {
      id: 6,
      title: "Corporate Events Planning",
      description: "End-to-end corporate event planning and management services for memorable experiences.",
      icon: "https://thumbs.dreamstime.com/b/diagram-concept-event-management-text-keywords-eps-isolated-green-background-diagram-concept-event-management-207457260.jpg",
      technologies: [
        "https://cdn.worldvectorlogo.com/logos/trello.svg",
        "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
        "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg",
       
      ],
      color: "#e67e22",
      contactMessage: "Hello! I'm looking for comprehensive Corporate Events Planning services for an upcoming event. I need end-to-end planning and management to create a memorable experience. Let's collaborate to make this event extraordinary!"
    },
    {
      id: 7,
      title: "Print Design",
      description: "Professional print design services for brochures, business cards, and marketing materials.",
      icon:"https://printex.lk/wp-content/uploads/2018/03/ticket-designing-sri-lanka.jpg",
      technologies: [
        "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg",
        "https://cdn.worldvectorlogo.com/logos/coreldraw.svg",
        "https://cdn.worldvectorlogo.com/logos/canva-1.svg"
      ],
      color: "#34495e",
      contactMessage: "Hi there! I'm interested in professional Print Design services for brochures, business cards, and marketing materials. I'd love to collaborate on creating high-quality print designs that make a lasting impression. Let's discuss the project!"
    }
  ];

  const handleGetStarted = (service) => {
    // Navigate to contact page with pre-filled message
    navigate('/contact', { 
      state: { 
        prefilledMessage: service.contactMessage,
        serviceTitle: service.title 
      } 
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className={styles.servicesContainer}>
      <Navbar />
      
      <div className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <ComponentTitle title="Our Services" />
          <p className={styles.heroDescription}>
            Comprehensive digital solutions to bring your vision to life. 
            From web development to creative design, we&apos;ve got you covered.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={styles.servicesGrid}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover="hover"
            className={styles.serviceCard}
            style={{ '--accent-color': service.color }}
          >
            <div className={styles.serviceIconSection}>
              <img src={service.icon} alt={service.title} className={styles.serviceMainIcon} />
            </div>
            
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              
              <div className={styles.technologies}>
                {service.technologies.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    alt="technology"
                    className={styles.techIcon}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.learnMoreBtn}
                onClick={() => handleGetStarted(service)}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={styles.ctaSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.ctaContent}
        >
          <h2>Ready to Start Your Project?</h2>
          <p>Let&apos;s collaborate and create something amazing together!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
            onClick={() => navigate('/contact')}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
