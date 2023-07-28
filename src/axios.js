import axios from "axios";
import store from "./store/index";

const token = store.state.token;

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common["Authorization"] = "Bearer " + token;

let x = false;
axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !x) {
      x = true;
      store.dispatch("Logout");
    }
    return error;
  }
);
