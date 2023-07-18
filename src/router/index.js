import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/LandingPage.vue";
import UserLogin from "../views/website/login.vue";
import UserSignup from "../views/website/Signup.vue";
import NotFound from "../views/NotFound.vue";
import Home from "../views/website/Home.vue";
import Menu from "../views/website/Menu.vue";
import Cart from "../views/website/Cart.vue";
import Bills from "../views/website/Bills.vue";
import Settings from "../views/website/Settings.vue";
/*
  Dashboard Pages
*/
import AdminLogin from "../views/dashboard/AdminLogin.vue";
import HomeDash from "../views/dashboard/Home.vue";
import AddCategory from "../views/dashboard/categories/AddCategory.vue";
import AllCategory from "../views/dashboard/categories/AllCategories.vue";
import AddDish from "../views/dashboard/dishes/AddDish.vue";
import AllDishes from "../views/dashboard/dishes/AllDishes.vue";

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
  {
    path: "/bills",
    name: "Bills",
    component: Bills,
    meta: {
      title: "Bills page",
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: {
      title: "Settings page",
    },
  },
  /*
    -->> Dashboard Routes
  */
  {
    path: "/dashboard/login",
    name: "AdminLogin",
    component: AdminLogin,
    meta: {
      title: "Dashboard Login",
    },
  },
  {
    path: "/dashboard/home",
    name: "HomeDash",
    component: HomeDash,
    meta: {
      title: "Dashboard Home",
    },
  },
  {
    path: "/dashboard/categories",
    name: "AllCategories",
    component: AllCategory,
    meta: {
      title: "Categories",
    },
  },
  {
    path: "/dashboard/categories/add-category",
    name: "AddCategory",
    component: AddCategory,
    meta: {
      title: "Add Category",
    },
  },
  {
    path: "/dashboard/dishes",
    name: "AllDishes",
    component: AllDishes,
    meta: {
      title: "Dishes",
    },
  },
  {
    path: "/dashboard/dishes/add-dish",
    name: "AddDish",
    component: AddDish,
    meta: {
      title: "Add dish",
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
