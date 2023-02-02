import { projectList } from "../data"

const ProjectList = ({ projects }) => {
    return `
    ${
        projects.map((item) => {
            return `
                <div>
                    <p>Project Id: ${item.id}</p>
                    <h2>Project Name: ${item.name}</h2>
                </div>
            `
        }).join("")
    }
  `
}

export default ProjectList