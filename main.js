import { render, router } from "./libs";

import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import PostsPage from "./pages/posts";
import ProjectDetailPage from "./pages/project-detail";
import ProjectsPage from "./pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/projects/:id", () => render(ProjectDetailPage, app));

router.resolve();

