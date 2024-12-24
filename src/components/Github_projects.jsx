import React, { useEffect, useState } from 'react';

const GitHubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Akashsnar/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setProjects(data);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>My GitHub Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubProjects;
