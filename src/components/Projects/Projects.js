import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const GITHUB_USERNAME = 'octocat'; // IMPORTANT: Replace with your actual GitHub username
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(GITHUB_API_URL);
        if (!response.ok) {
          throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        const filteredProjects = data
          .filter(repo => !repo.fork) // Filter out forked repositories
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sort by most recently updated
          .slice(0, 6); // Get top 6
        setProjects(filteredProjects);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="projects-container page-container"><p style={{textAlign: 'center'}}>Loading projects...</p></div>;
  }

  if (error) {
    return <div className="projects-container page-container"><p style={{textAlign: 'center', color: '#ff6b6b'}}>Error loading projects: {error}. (Check username and API rate limits)</p></div>;
  }

  return (
    <motion.div
      className="projects-container page-container"
    >
      <h2>My Projects</h2>
      {projects.length === 0 && !loading && <p style={{textAlign: 'center'}}>No public projects found for this user, or all projects are forks.</p>}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(187, 134, 252, 0.3)" }} // Accent shadow
          >
            <div> {/* Content wrapper for flex grow */}
              <h3>{project.name}</h3>
              <p>{project.description || 'No description available.'}</p>
            </div>
            <div className="project-links"> {/* Added class for styling links */}
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">View Code (GitHub)</a>
              {project.homepage && (
                <>
                  {' | '}
                  <a href={project.homepage} target="_blank" rel="noopener noreferrer">View Live Demo</a>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
