import Category from "../components/Category";
import Header from "../components/Header";
import Projects from "../components/Projects";
import { useEffect, useState } from "../libs";

const HomePage = () => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, []);
    const onHandleClick = (id) => {
        fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
            .then(response => response.json())
            .then(data => setProjects(data.projects))
    }
    return `
        ${Header()}
        ${Category({ categories, onClick: onHandleClick })}
        ${Projects({ projects })}
    `;
};
export default HomePage;
