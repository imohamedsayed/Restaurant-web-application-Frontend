<template>
  <header class="d-flex align-items-center justify-content-between mb-5">
    <div class="search">
      <input type="search" placeholder="Search" />
    </div>
    <div class="public">
      <div class="d-flex align-items-center" v-if="state.customer">
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
      <div v-else>
        <button @click="$router.push('/login')">Login</button>
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
  @media (max-width: 461px) {
    flex-direction: column-reverse;
    gap: 20px;
    justify-content: flex-end;
  }
  .search {
    flex: 1;
    max-width: 40%;
    position: relative;
    @media (max-width: 461px) {
      max-width: 100%;
    }
    &::after {
      font-family: "Font Awesome 6 Free";
      content: "\f002";
      position: absolute;
      left: 12px;
      color: #00000098;
      top: 7px;
      font-weight: 900;
    }
    input {
      width: 100%;
      height: 40px;
      padding: 10px;
      border: none;
      transition: all 0.3s ease-in-out;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding-left: 40px;

      &:focus {
        outline: none;
        font-size: 1.3rem;
      }
    }
  }
  .public {
    button {
      width: 120px;
      height: 40px;
      border: none;
      outline: none;
      background: linear-gradient(
        to bottom right,
        var(--light-orange),
        var(--dark-orange)
      );
      opacity: 0.9;
      border-radius: 10px;
      color: white;
      transition: all 0.3s ease;
      &:hover {
        opacity: 1;

        font-size: 1.2rem;
      }
    }
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
