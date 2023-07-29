<template>
  <header class="d-flex mb-5">
    <div class="public d-flex align-items-center" v-if="state.user">
      <div class="img me-2">
        <img :src="'http://localhost:8000/' + state.user.image" alt="" />
      </div>
      <div class="info pe-2">
        <p class="m-0 fw-bold">{{ state.user.name }}</p>
        <span class="text-muted me-3">{{
          state.user.role == 0 ? "Customer" : "Admin"
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
            <li @click="logout">
              <a class="dropdown-item text-danger fw-bold" href="#">
                <i class="fa-solid fa-door-open fa-bounce me-2"></i>Logout</a
              >
            </li>
          </ul>
        </span>
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
      user: computed(() => store.state.user),
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
  padding: 10px 20px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
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
