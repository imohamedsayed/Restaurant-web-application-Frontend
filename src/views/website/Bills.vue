<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row" v-if="state.customer && state.orders.length">
          <div
            class="col-lg-4 col-md-6 col-12 mb-4"
            v-for="order in state.orders"
            :key="order._id"
          >
            <Bill :order="order" />
          </div>
        </div>
        <div class="not-authorized text-center" v-else-if="!state.customer">
          <img src="../../assets/biils.svg" class="img-fluid" alt="" />
          <h1>You are not allowed to access this page</h1>
          <h5>Login to your account so you can see your bills</h5>
        </div>
        <div
          class="not-authorized text-center"
          v-else-if="!state.orders.length"
        >
          <img src="../../assets/noBills.svg" class="img-fluid" alt="" />
          <h1>You have no bills</h1>
          <h5>Add items to your cart and complete your orders</h5>
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import Bill from "@/components/website/bills/Bill.vue";
import { useStore } from "vuex";
import { computed, onMounted, reactive } from "vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
  components: { SideBar, Header, Bill, SpinnerLoading },
  setup() {
    const store = useStore();
    const state = reactive({
      customer: computed(() => store.state.user),
      loading: false,
      orders: "",
    });
    onMounted(async () => {
      if (state.customer) {
        state.loading = true;

        try {
          const res = await axios.get("/api/orders");
          if (res.status !== 200) {
            toast.error("you are not authorized ");
          } else {
            state.orders = res.data.orders;
          }
        } catch (err) {
          toast.error("something went wrong, please try again later");
        }

        state.loading = false;
      }
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped>
.page-view {
  display: flex;
  background: #000 !important;
  main {
    margin: 20px 0;
    height: calc(100vh - 40px);
    flex: 1;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    overflow: auto;
    @media (max-width: 572px) {
      padding-bottom: 60px;
      border-radius: 0px;
      margin: 0;
    }
    .not-authorized {
      img {
        width: 400px;
      }
      margin-top: 100px;
      font-weight: bold;
      h5 {
        font-weight: 600;
      }
    }
  }
}
</style>
