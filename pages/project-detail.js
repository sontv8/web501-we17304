import { projectList } from "../data"
const ProjectDetailPage = ({data: {id}}) => {
    // console.log('data: ',data);
    // const id = data.id;
    console.log(id);

    const project = projectList.find(function(project){
        return project.id == id
    })
    console.log(project);
    return `
        <h1>${project.name}</h1>
    `
}

export default ProjectDetailPage