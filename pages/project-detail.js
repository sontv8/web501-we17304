import { projectList } from "../data"
import { router } from "../libs";
const ProjectDetailPage = ({data: {id}}) => {
    // console.log('data: ',data);
    // const id = data.id;
    console.log(id);

    const project = projectList.find(function(project){
        return project.id == id
    })
    
    // check trước khi hiển thị ra
    if(!project){
        return router.navigate("/projects")
    }
    // nếu project id có tồn tại thì tiến hành hiển thị
    return `
        <h1>${project.name}</h1>
    `
}

export default ProjectDetailPage