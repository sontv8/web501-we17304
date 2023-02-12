import { projectList } from "../../data"
import { useEffect, useState } from "../../libs"
const AdminProjectPage = () => {
    //   const[data,setData] = useState(projectList);
    const [data, setData] = useState([]);

    // Hàm được gọi lại sau khi return ( render ) ra ngoài màn hình
    useEffect(()=>{
        // Lấy dữ liệu từ localStorage ra, nếu nó không có thì gán bằng []
        // const projects = JSON.parse(localStorage.getItem("projects"))||[];
        // setData(projects)
        fetch("http://localhost:3000/projects")
          .then((response)=> response.json())
          .then((data)=> setData(data))
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
                // Xóa ở local
                setData(newData); //set lại data ở client
                // localStorage.setItem("projects",JSON.stringify(newData)); //set lại data ở localStorage

                // Xóa ở server
                fetch(`http://localhost:3000/projects/${id}`,{
                  method:"DELETE"
                })
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