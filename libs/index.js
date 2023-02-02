import Navigo from "navigo";

// khởi tạo 1 object từ Navigo
const router = new Navigo("/",{linksSelector:"a"});


const render = (content,container) => {
    container.innerHTML = content();
  }

export {router,render};