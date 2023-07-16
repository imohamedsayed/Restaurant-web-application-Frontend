<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row">
          <MenuSheet />
          <MenuSheet />
          <MenuSheet />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import MenuSheet from "@/components/website/menu/MenuSheet.vue";
export default {
  components: { SideBar, Header, MenuSheet },
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
    .row {
      margin-top: 100px;
    }
  }
}
</style>
