import { motion } from "framer-motion";
import "./About.css"; // Подключение CSS

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Vendify
        </motion.h2>
        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Vendify is your ultimate solution for streamlined e-commerce. Our mission
          is to empower businesses with seamless, user-friendly tools for selling
          products online and reaching global markets effortlessly.
        </motion.p>
        <motion.div
          className="about-button-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <button className="about-button">Learn More</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
