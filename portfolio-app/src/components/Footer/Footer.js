import React from 'react';
import './Footer.css';

const GITHUB_USERNAME = 'octocat'; // Replace with your actual GitHub username

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Deivy Jampool Sanchez Coronado. All rights reserved.</p>
      <div>
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">GitHub</a> |
        {/* Replace with your actual LinkedIn profile URL */}
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
