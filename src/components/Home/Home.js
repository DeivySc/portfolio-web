import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container page-container"> {/* page-container for max-width and padding */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        Deivy Jampool Sanchez Coronado
      </motion.h1>
      <motion.p
        className="home-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
      >
        Software Developer | Web & Mobile Enthusiast
      </motion.p>
      <motion.p
        className="home-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Passionate about crafting innovative and user-friendly digital experiences. Exploring the frontiers of technology to build solutions that make a difference.
      </motion.p>
    </div>
  );
};

export default Home;
