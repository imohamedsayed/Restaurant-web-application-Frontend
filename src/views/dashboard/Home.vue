<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-6 mb-4">
            <div class="stat-box">
              <i class="fa-solid fa-users fa-fade"></i>
              {{ state.usersNo }} User
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-6 mb-4">
            <div class="stat-box">
              <i class="fa-solid fa-bowl-food fa-flip"></i>
              {{ state.DishNo }} Dish
            </div>
          </div>

          <div class="col-lg-3 col-md-4 col-6 mb-4">
            <div class="stat-box">
              <i class="fa-solid fa-truck-fast fa-shake"></i
              >{{ state.orderNo }} Order
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-6 mb-4">
            <div class="stat-box">
              <i class="fa-solid fa-dollar-sign fa-bounce"></i>
              {{ state.revenue }}$ Revenue
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6 col-12 mb-4">
            <Statisfaction />
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <div class="last-orders"><Calender /></div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";
import Statisfaction from "@/components/dashboard/home/Statisfaction.vue";
import Calender from "@/components/dashboard/home/Calender.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
  components: { SideBar, Header, Statisfaction, Calender, SpinnerLoading },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      loading: false,
      user: computed(() => store.state.user),
      usersNo: 0,
      DishNo: 0,
      orderNo: 0,
      revenue: 0,
    });

    onMounted(async () => {
      if (!state.user) {
        router.push("/");
      } else {
        if (!state.user.role) {
          router.push("/");
        }
      }
      state.loading = true;

      try {
        const users_res = await axios.get("/api-dashboard/users/stats");
        state.usersNo = users_res.data.stats.number;
      } catch (err) {
        toast.warning(
          "something went wrong when getting users stats, try again later"
        );
      }

      try {
        const dish_res = await axios.get("/api-dashboard/dishes/stats");
        state.DishNo = dish_res.data.stats.number;
      } catch (err) {
        toast.warning(
          "something went wrong when getting dishes stats, try again later"
        );
      }

      try {
        const order_res = await axios.get("/api-dashboard/orders/stats");

        state.orderNo = order_res.data.orders;
        state.revenue = order_res.data.revenue;
      } catch (err) {
        toast.warning(
          "something went wrong when getting orders and revenue stats, try again later"
        );
      }

      state.loading = false;
    });

    return { state };
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
    .stat-box {
      display: grid;
      place-content: center;
      width: 100%;
      height: 200px;
      background: var(--dark-orange);
      border-radius: 15px;
      box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
      text-align: center;
      font-size: 1.6rem;
      color: var(--text-black-700);
      transition: all 0.3s ease;
      overflow: hidden;
      color: #fff;
      position: relative;
      &:hover {
        transform: scale(1.05);
      }
      i {
        color: #fff;
        position: absolute;
        right: -15px;
        bottom: -15px;
        font-size: 6rem;
        opacity: 0.7;
      }
    }
  }
}
</style>
