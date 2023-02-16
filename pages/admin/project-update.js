// import { projectList } from "../../data";
import { getProject, updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../libs";

const AdminProjectUpdatePage = ({data: {id}}) => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    // const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    // const currentProject = projectList.find((project)=> project.id == id)
    /*
        B1: call api -> lấy data
        B2: set lại data để đổ dữ liệu ra form
        B3: submit form -> call api (truyền theo id cần update)
        B4: sau khi submit form thành công thì điều hướng về admin/projects
    */ 
   const [data,setData] = useState([])
    useEffect(()=>{
        // fetch(`http://localhost:3000/projects/${id}`)
        //     .then((response)=> response.json())
        //     .then((data) => setData(data))

        getProject(id).then(({data}) => setData(data))
    },[])
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newProject = {
                id: id,
                name: projectName.value
            };
            // fetch(`http://localhost:3000/projects/${id}`,{
            //     method:"PUT",
            //     headers:{
            //         "Content-Type":"application/json"
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(()=> router.navigate("/admin/projects"))

            updateProject(newProject).then(()=> router.navigate("/admin/projects"))


            // cập nhật vào mảng projectList
            // const newProjectList = projectList.map((project)=>{
            //     return project.id == newProject.id? newProject:project
            // })

            // lưu vào localStorage dưới dạng chuỗi
            // localStorage.setItem("projects",JSON.stringify(newProjectList));

            // điều hướng về trang projects
            // router.navigate("/admin/projects");
        });
    });
    return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${data.name}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminProjectUpdatePage;