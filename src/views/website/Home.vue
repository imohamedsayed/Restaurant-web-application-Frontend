<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="categories">
          <h2 class="fw-bold mb-2">Choose Category</h2>
          <div class="row nav nav-tabs" id="myTab" role="tablist">
            <CategoryBox
              v-for="category in state.categories"
              :key="category._id"
              :category="category"
            />
          </div>
          <div class="tab-content" id="myTabContent">
            <CategoryMenu
              v-for="category in state.categories"
              :key="category._id"
              :category="category"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import CategoryBox from "@/components/website/home/CategoryBox.vue";
import CategoryMenu from "@/components/website/home/CategoryMenu.vue";
import { onMounted, reactive } from "vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import axios from "axios";
import { toast } from "vue3-toastify";
export default {
  components: { SideBar, Header, CategoryBox, CategoryMenu, SpinnerLoading },
  setup() {
    const state = reactive({
      categories: [],
      loading: false,

    });

    onMounted(async () => {
      state.loading = true;

      try {
        const catRes = await axios.get("/api/category");

        if (catRes.status == 200) {
          state.categories = catRes.data.categories;
        } else {
          toast.error("Something went wrong. try again later");
        }
      } catch (err) {
        toast.error("Something went wrong. try again later");
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
  }
}
</style>
