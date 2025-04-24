// filepath: src/router/index.js
import TheHome from "../views/home/TheHome.vue";
import TheIntro from "../views/intro/TheIntro.vue";
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
];

export default routes;