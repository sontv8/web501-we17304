import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { projectList } from "../data";

const ProjectPage = ()=>{
    console.log(projectList.map(item => `<p>Project Id: ${item.id}</p>`).join(""));
    return `
        ${Header()}
        <h1>Project Page</h1>
        ${ProjectList({ projects: projectList})}
    `;
}
export default ProjectPage;