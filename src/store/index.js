import axios from "axios";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import * as cookies from "js-cookie";
const state = {
  user: null,
  token: null,
};
const mutations = {
  setUser(state, user) {
    state.user = user;
  },

  setToken(state, token) {
    state.token = token;
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

      const { token, _doc } = res.data.user;
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      context.commit("setToken", token);
      context.commit("setUser", _doc);

      console.log(context.state);
    } catch (err) {
      if (err.response.data.errors.email) throw err.response.data.errors.email;
      else if (err.response.data.errors.password)
        throw err.response.data.errors.password;
      else throw "Something went wrong, try again later.";
    }
  },

  async AdminLogin(context, { email, password }) {
    try {
      const res = await axios.post("/api/auth/dashboard/login", {
        email,
        password,
      });

      const { token, _doc } = res.data.user;
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      context.commit("setToken", token);
      context.commit("setUser", _doc);
    } catch (err) {
      if (err.response.data.errors.email) throw err.response.data.errors.email;
      else if (err.response.data.errors.password)
        throw err.response.data.errors.password;
      else throw "Something went wrong try again later";
    }
  },

  Logout(context) {
    context.commit("setToken", null);
    context.commit("setUser", null);
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
