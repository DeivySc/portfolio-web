import React from 'react';
// import { motion } from 'framer-motion'; // No longer needed here for page-level
import './About.css';

const About = () => {
  return (
    <div className="about-container page-container">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p><strong>Correo:</strong> sanchezcoronadodeivy5@gmail.com</p>
          <p><strong>Teléfono:</strong> +51 951108576</p>
          <p><strong>Dirección:</strong> Cañete - Lima - Perú</p>
          <h3>Sobre mi:</h3>
          <p>
            I am a software developer with a passion for creating engaging and user-friendly web applications. I am always looking to learn new technologies and improve my skills.
            {/* User should fill this part with their actual "Sobre mi" text */}
          </p>
        </div>
        {/* <img src="your-image-url.jpg" alt="Deivy Sanchez" className="about-image"/> */}
      </div>
    </div>
  );
};

export default About;
