// import { projectList } from "../../data";
import { router, useEffect } from "../../libs";

const AdminProjectUpdatePage = ({data: {id}}) => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    const projectList = JSON.parse(localStorage.getItem("projects"))||[];
    const currentProject = projectList.find((project)=> project.id == id)
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newProject = {
                id: currentProject.id,
                name: projectName.value
            };
            // cập nhật vào mảng projectList
            const newProjectList = projectList.map((project)=>{
                return project.id == newProject.id? newProject:project
            })

            // lưu vào localStorage dưới dạng chuỗi
            localStorage.setItem("projects",JSON.stringify(newProjectList));

            // điều hướng về trang projects
            router.navigate("/admin/projects");
        });
    });
    return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${currentProject.name}"/>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminProjectUpdatePage;