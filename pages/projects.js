import Header from "../components/Header";
import { projectList } from "../data";

const ProjectPage = ()=>{
    console.log(projectList.map(item => `<p>Project Id: ${item.id}</p>`).join(""));
    return `
        ${Header()}
        <h1>Project Page</h1>
        ${
            projectList.map((item)=>{
                return `
                    <div>
                        <p>Project Id: ${item.id}</p>
                        <h2>Project Name: ${item.name}</h2>
                    </div>
                `
            }).join("")
        }
    `;
}

export default ProjectPage;