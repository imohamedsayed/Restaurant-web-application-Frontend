<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-solid fa-truck-fast me-2 fa-shake"></i>Orders
        </h2>
        <div class="ground">
          <div class="up-area"></div>
          <input
            type="search"
            class="search my-5"
            placeholder="search for an order "
            v-model="state.searchItem"
            @keyup="search(state.searchItem)"
          />
          <OrdersList :orders="state.display" />
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";
import OrdersList from "../../../components/dashboard/orders/OrdersList.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { reactive, onMounted, computed } from "vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  components: { SideBar, Header, OrdersList, SpinnerLoading },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user),
      loading: false,
      orders: [],
      display: [],
      searchItem: "",
      search: " ",
    });
    onMounted(async () => {
      if (!state.user) {
        router.push("/dashboard/login");
      } else {
        if (!state.user.role) {
          router.push("/");
        }
      }
      state.loading = true;

      try {
        const res = await axios.get("/api-dashboard/orders/");
        if (res.status) {
          state.orders = res.data.orders;
          state.display = state.orders;
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error("Something went wrong, please try again later.");
      }

      state.loading = false;
    });

    const search = (key) => {
      state.display = state.orders.filter((order) =>
        order.deliveryInfo.name.toLowerCase().includes(key.toLowerCase())
      );
    };
    return { state, search };
  },
};
</script>
<style lang="scss" scoped>
.dash-view {
  display: flex;
  main {
    height: calc(100vh - 0px);
    flex: 1;
    background: #fff;
    overflow: auto;
    padding-left: 18rem;
    @media (max-width: 572px) {
      margin: 0;
    }
    @media (max-width: 991px) {
      padding-left: 0;
    }

    h2 {
      font-weight: bold;
      letter-spacing: 3px;
      i {
        color: var(--dark-orange);
      }
    }
    .ground {
      padding: 40px;
      border-radius: 25px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      background: var(--bg-black-100);
      .up-area {
        margin-bottom: 30px;
        button {
          width: 220px;
          display: block;
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
      }
    }
  }
}
</style>
