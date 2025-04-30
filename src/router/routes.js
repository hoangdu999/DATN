// filepath: src/router/index.js
import TheHome from "../views/home/TheHome.vue";
import TheIntro from "../views/intro/TheIntro.vue";
import TheAuth from "../views/auth/TheAuth.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: TheHome,
  },
  {
    path: "/intro",
    name: "Intro",
    component: TheIntro,
  },
  {
    path: "/auth",
    name: "Auth",
    component: TheAuth,
  },
  
];

export default routes;