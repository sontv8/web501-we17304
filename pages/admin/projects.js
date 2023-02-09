import { projectList } from "../../data"
import { useEffect, useState } from "../../libs"
const AdminProjectPage = () => {
    //   const[data,setData] = useState(projectList);
    const [data, setData] = useState([]);

    useEffect(()=>{
        const projects = JSON.parse(localStorage.getItem("projects"))||[];
        setData(projects)
    },[])
    // chạy sau khi render
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                console.log(id)
                const newData = data.filter((project) => {
                    return project.id != id;
                })
                setData(newData); //set lại data ở client
                // localStorage.setItem("projects",JSON.stringify(newData)); //set lại data ở localStorage
            })
        }
    })
    return /*html*/`
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((project, index) => {
        return /*html*/`
            <tr>
              <td>${index + 1}</td>
              <td>${project.name}</td>
              <td>
                <button data-id="${project.id}" class="btn-remove">Xóa</button>
              </td>
            </tr>
          `
    }).join("")}
      </tbody>
    </table>
  `
}

export default AdminProjectPage