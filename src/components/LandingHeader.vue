<template>
  <header
    class="landing-header d-flex justify-content-between align-items-center"
  >
    <div class="logo">
      <router-link :to="{ name: 'Landing' }">
        <img src="../assets/logo.png" class="img-fluid" alt="" />
      </router-link>
    </div>
    <div class="actions">
      <div v-if="!state.customer">
        <router-link :to="{ name: 'UserLogin' }">
          <button class="btn me-4 login">Login</button>
        </router-link>
        <router-link :to="{ name: 'UserSignup' }">
          <button class="btn signup">Signup</button>
        </router-link>
      </div>
      <div class="d-flex align-items-center public" v-else>
        <div class="img me-2">
          <img :src="'http://localhost:8000/' + state.customer.image" alt="" />
        </div>
        <div class="info pe-2">
          <p class="m-0 fw-bold">{{ state.customer.name }}</p>
          <span class="text-muted me-3">{{
            state.customer.role == 0 ? "Customer" : "Admin"
          }}</span>
          <span class="dropdown">
            <i
              class="fa-solid fa-chevron-down options"
              aria-expanded="false"
              type="button"
              data-bs-toggle="dropdown"
            ></i>
            <ul class="dropdown-menu me-5">
              <li>
                <router-link
                  :to="{ name: 'Settings' }"
                  class="dropdown-item"
                  href="#"
                >
                  <i class="fa-solid fa-user me-2"></i> Profile</router-link
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-danger fw-bold"
                  href="#"
                  @click="logout"
                >
                  <i class="fa-solid fa-door-open fa-bounce me-2"></i>Logout</a
                >
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      customer: computed(() => store.state.user),
    });

    const logout = () => {
      store.dispatch("Logout");
      router.push("/");
    };
    return { state, logout };
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 80px;
  padding: 20px 40px;
  .logo {
    img {
      width: 60px;
    }
  }
  .actions {
    button {
      width: 100px;
      transition: all 0.3s ease;

      &.login {
        &:hover {
          transform: scale(1.5);
          font-weight: bold;
          color: #000;
        }
        &:focus {
          outline: none;
          border: none;
        }
      }
      &.signup {
        background: linear-gradient(to bottom right, #555, #000) !important;
        color: white;

        &:hover {
          font-weight: bold;
          opacity: 0.8;
        }
      }
    }
  }
  .public {
    .img {
      img {
        border-radius: 50px;
        width: 50px !important;
        margin-right: 10px;
        height: 50px;
      }
    }
    .info {
      .options {
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 10px;
        border-radius: 50px;
        &:hover {
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
