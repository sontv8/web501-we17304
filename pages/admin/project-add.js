// import { projectList } from "../../data";
import { addProject } from "../../api/project";
import { router, useEffect } from "../../libs";
import { object, string } from 'yup';

const projectSchema = object({
    name: string().required(),
    desc: string().required()
})
const AdminProjectAddPage = () => {
    // kiểm tra localStorage có dữ liệu không?
    // nếu có thì lấy dữ liệu
    // ngược lại thì gán mảng rỗng

    const projectList = JSON.parse(localStorage.getItem("projects")) || [];
    console.log(projectList);

    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        const projectDesc = document.getElementById("project-desc");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            // tạo ra 1 object mới lấy dữ liệu từ form
            const newProject = {
                // id: projectList.length + 1,
                name: projectName.value,
                desc: projectDesc.value
            };

            projectSchema.validate(newProject, { abortEarly: false })
                .then(() => {
                    fetch("http://localhost:3000/projects", {
                        // GET, POST, PUT, DELETE...
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newProject)
                    }).then(() => router.navigate("/admin/projects"))
                })
                .catch(error => {
                    error.inner.forEach(error => console.log(error.path))
                })
            //

            addProject(newProject).then(() => router.navigate("/admin/projects"))


            // thêm vào mảng projectList
            // projectList.push(newProject);

            // lưu vào localStorage dưới dạng chuỗi
            // localStorage.setItem("projects",JSON.stringify(projectList));

            // console.log(localStorage.getItem("projects"));
            // điều hướng về trang projects
            // router.navigate("/admin/projects");
        });
    });
    return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" />
            </div>
            <div class="form-group mb-3">
                <label for="" class="form-label">Mô tả dự án</label>
                <input type="text" class="form-control" id="project-desc" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminProjectAddPage;