import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import Navigo from "navigo";

const app = document.querySelector('#app');

const render = (container,content) => {
  container.innerHTML = content();
}

// khởi tạo 1 object từ Navigo
const router = new Navigo();

// tạo các đường dẫn đến các page
router.on('/',()=>{
  render(app,HomePage);
})
router.on('/contact',()=>{
  render(app,ContactPage);
})

router.resolve();