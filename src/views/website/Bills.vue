<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row" v-if="state.customer">
          <div class="col-lg-4 col-md-6 col-12 mb-4">
            <Bill />
          </div>
        </div>
        <div class="not-authorized text-center" v-else>
          <img src="../../assets/biils.svg" class="img-fluid" alt="" />
          <h1>You are not allowed to access this page</h1>
          <h5>Login to your account so you can see your bills</h5>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import Bill from "@/components/website/bills/Bill.vue";
import { useStore } from "vuex";
import { computed, reactive } from "vue";
export default {
  components: { SideBar, Header, Bill },
  setup() {
    const store = useStore();
    const state = reactive({
      customer: computed(() => store.state.user),
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
      margin-top: 200px;
      font-weight: bold;
      h5 {
        font-weight: 600;
      }
    }
  }
}
</style>
