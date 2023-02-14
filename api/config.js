import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:3000"
})

const getProjects = () => {
    return instance.get(`/projects`)
}
const deleteProject = (id) =>{
    return instance.delete(`/projects/${id}`)
}
const getProject = (id) => {
    return instance.get(`/projects/${id}`)
}
const updateProject = (project) => {
    return instance.put(`/projects/${project.id}`,project)
}

export {getProjects,deleteProject,getProject,updateProject}