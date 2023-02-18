const Projects = ({ projects }) => {
  return `
    <div>${projects.map(project => `<div>${project.name}</div>`)}</div>
  `
}

export default Projects