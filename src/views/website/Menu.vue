<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row" v-if="state.categories.length">
          <MenuSheet
            v-for="category in state.categories"
            :key="category._id"
            :category="category"
          />
        </div>
        <div class="no-items text-center" v-else>
          <img src="../../assets/menu.svg" class="img-fluid" alt="" />
          <h1>The Menu is empty</h1>
          <h5>Sorry we have no products available now</h5>
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import MenuSheet from "@/components/website/menu/MenuSheet.vue";
import { onMounted, reactive } from "vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import axios from "axios";
import { toast } from "vue3-toastify";

export default {
  components: { SideBar, Header, MenuSheet, SpinnerLoading },
  setup() {
    const state = reactive({
      categories: [],
      loading: false,
    });

    onMounted(async () => {
      state.loading = true;

      try {
        const res = await axios.get("/api/category/");

        state.categories = res.data.categories;
      } catch (err) {
        toast.error("Something went wrong, try again later");
      }
      state.loading = false;
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
    .row {
      margin-top: 100px;
    }
    .no-items {
      img {
        width: 600px;
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
