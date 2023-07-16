<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="categories">
          <h2 class="fw-bold mb-5">Choose Category</h2>
          <div class="row nav nav-tabs" id="myTab" role="tablist">
            <CategoryBox />
          </div>
          <div class="tab-content" id="myTabContent">
            <CategoryMenu />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import CategoryBox from "@/components/website/home/CategoryBox.vue";
import CategoryMenu from "@/components/website/home/CategoryMenu.vue";
export default {
  components: { SideBar, Header, CategoryBox, CategoryMenu },
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
  }
}
</style>
