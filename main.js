import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import { router } from "./libs";
import AboutPage from "./pages/about";
import PostPage from "./pages/post";

const app = document.querySelector('#app');

const render = (container,content) => {
  container.innerHTML = content();
}

// tạo các đường dẫn đến các page
router.on('/',()=>{
  render(app,HomePage);
})
router.on('/contact',()=>{
  render(app,ContactPage);
})
router.on('/about', ()=>{
  render(app,AboutPage)
})
router.on('/post', ()=>{
  render(app,PostPage)
})

router.resolve();