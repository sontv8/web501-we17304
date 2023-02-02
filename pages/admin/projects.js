import { projects } from "../../data";
import { useEffect, useState } from "../../lib";

const AdminProjectsPage = () => {
    const [data, setData] = useState(projects); // [data,data2,data3]

    // chạy sau khi render
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            // btn là 1 phần tử trong mảng?
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newData = data.filter((project) => project.id != id); // [data1,data3]
                setData(newData); // set lại data
            });
        }
    });

    return /*html*/ `<div class="container mt-5"> 
                <h1>Quản lý dự án</h1>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên dự án</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data
                            .map((project, index) => {
                                return `
                                <tr>
                                    <td>${index + 1}</td>
                                    <td>${project.name}</td>
                                    <td width="150">
                                        <button data-id="${
                                            project.id
                                        }" class="btn btn-danger btn-remove">
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            `;
                            })
                            .join("")}
                        
                    </tbody>
                </table>
    </div>`;
};

export default AdminProjectsPage;
