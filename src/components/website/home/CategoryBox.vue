<template>
  <div class="col-lg-2 col-md-3 col-6 mb-4">
    <div
      class="cat-box text-center nav-link item-box"
      :id="category._id + '-tab'"
      data-bs-toggle="tab"
      :data-bs-target="'#' + category._id"
      type="button"
      role="tab"
      :aria-controls="category._id"
      aria-selected="true"
    >
      <img
        :src="'http://localhost:8000/' + category.image"
        width="80px"
        alt=""
      />
      <p class="cat-name mt-3 fw-bold">{{ category.name }}</p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  props: ["category"],
  setup() {
    onMounted(() => {
      document.querySelectorAll(".cat-box")[0].classList.add("active");
    });
  },
};
</script>

<style lang="scss" scoped>
.cat-box {
  width: 100%;
  height: 150px;
  border: 1px solid var(--light-orange) !important;
  padding: 10px;
  border-radius: 20px !important;
  transition: all 0.6s ease;
  cursor: pointer;
  img {
    width: 80px;
  }
  color: #111;

  &:hover {
    background: var(--light-orange) !important;
    color: #fff;
  }
  &.active {
    background: var(--dark-orange) !important;
    color: #fff !important;
  }
}
</style>
