<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container"></div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";

export default {
  components: { SideBar, Header },
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
  }
}
</style>
