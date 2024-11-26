import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <section className="bg-gray-50 py-16" id="about">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
