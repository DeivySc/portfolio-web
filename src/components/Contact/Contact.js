import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Ensure this CSS file exists and is styled

const Contact = () => {
  // Phone number with country code (Peru is +51)
  const whatsappNumber = "51951108576";
  // Default message (URL encoded)
  const defaultMessage = "Hello Deivy, I'm interested in your profile and would like to know more.";

  const openWhatsApp = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="contact-container page-container"
      // Page transitions are handled in App.js
    >
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Send me a message on WhatsApp!</p>
      <motion.button
        onClick={openWhatsApp}
        className="whatsapp-button"
        whileHover={{ scale: 1.05, backgroundColor: "#128C7E" }} // Darker green on hover
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Chat on WhatsApp
      </motion.button>
    </motion.div>
  );
};

export default Contact;
