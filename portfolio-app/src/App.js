import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Removed BrowserRouter as Router
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const location = useLocation(); // Must be inside Router context if App is wrapped by Router in index.js

  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw"
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "100vw"
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <>
      <Header />
      <main className="app-main-content"> {/* Added class for main content styling */}
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="page-container">
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="page-container">
                <About />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="page-container">
                <Projects />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="page-container">
                <Contact />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

// Wrap App with Router in a higher order component if not already done in index.js
// For this subtask, we assume App is the child of Router as per standard create-react-app setup.
// If index.js wraps App in Router, then useLocation can be used directly in App.
// Let's ensure index.js has Router
export default App;
