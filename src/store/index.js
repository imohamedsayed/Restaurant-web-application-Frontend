import axios from "axios";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as cookies from "js-cookie";
const state = {
  user: null,
  token: null,
  cart: [],
};
const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setToken(state, token) {
    state.token = token;
  },

  async addToCart(state, item) {
    const itemInCart = state.cart.find((p) => p._id == item);
    if (itemInCart) {
      itemInCart.qty++;
    } else {
      const product = (await axios.get("/api/dishes/" + item)).data.dish;
      state.cart.push({
        ...product,
        qty: 1,
      });
    }
  },

  setCart(state, data) {
    state.cart = data;
  },
};

const actions = {
  async customerSignup(context, { name, email, password }) {
    try {
      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });

      const { token, _doc } = res.data.user;
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      context.commit("setToken", token);
      context.commit("setUser", _doc);
    } catch (err) {
      throw err.response.data.errors.email;
    }
  },

  async customerLogin(context, { email, password }) {
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      if (res.status == 200) {
        const { token, _doc } = res.data.user;
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        context.commit("setToken", token);
        context.commit("setUser", _doc);
      } else {
        const error = res.response.data.errors;
        if (error.email) throw error.email;
        else if (error.password) throw error.password;
        else throw "Something went wrong try again later";
      }
    } catch (err) {
      throw err;
    }
  },

  async AdminLogin(context, { email, password }) {
    try {
      const res = await axios.post("/api/auth/dashboard/login", {
        email,
        password,
      });
      if (res.status == 200) {
        const { token, _doc } = res.data.user;
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        context.commit("setToken", token);
        context.commit("setUser", _doc);
      } else {
        const error = res.response.data.errors;
        if (error.email) throw error.email;
        else if (error.password) throw error.password;
        else throw "Something went wrong try again later";
      }
    } catch (err) {
      throw err;
    }
  },

  Logout(context) {
    context.commit("setToken", null);
    context.commit("setUser", null);
  },

  async addToCart(context, { id }) {
    context.commit("addToCart", id);
  },
  emptyCart(context) {
    context.commit("setCart", []);
  },
};

const getters = {};
const modules = {};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: [
    createPersistedState({
      getState: (key) => cookies.getJSON(key),
      setState: (key, state) =>
        cookies.set(key, state, { expires: 3, secure: true }),
    }),
  ],
});
