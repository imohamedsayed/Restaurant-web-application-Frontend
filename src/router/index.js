import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LandingPage.vue";
import UserLogin from "../views/website/login.vue";
import UserSignup from "../views/website/Signup.vue";
import NotFound from "../views/NotFound.vue";
import Home from "../views/website/Home.vue";
import Menu from "../views/website/Menu.vue";
import Cart from "../views/website/Cart.vue";
const routes = [
  {
    path: "/",
    name: "Landing",
    component: HomeView,
    meta: {
      title: "Welcome",
    },
  },
  /*
    -->> Website Routes
  */
  {
    path: "/login",
    name: "UserLogin",
    component: UserLogin,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/signup",
    name: "UserSignup",
    component: UserSignup,
    meta: {
      title: "Sign Up",
    },
  },
  {
    path: "/home",
    name: "HomePage",
    component: Home,
    meta: {
      title: "Home page",
    },
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    meta: {
      title: "Menu page",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: {
      title: "Cart page",
    },
  },
  /*
    --> 404 Page
  */
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "404 Not Found",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | MSO Restaurant`;
  next();
});
export default router;
