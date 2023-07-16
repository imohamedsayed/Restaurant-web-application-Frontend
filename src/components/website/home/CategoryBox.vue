<template>
  <div class="col-lg-2 col-md-3 col-6 mb-4">
    <div
      class="cat-box text-center nav-link active"
      id="checkin-tab"
      data-bs-toggle="tab"
      data-bs-target="#checkin"
      type="button"
      role="tab"
      aria-controls="checkin"
      aria-selected="true"
    >
      <img src="../../../assets/category/check.svg" width="80px" alt="" />
      <p class="cat-name mt-3 fw-bold">Chicken</p>
    </div>
  </div>
  <div class="col-lg-2 col-md-3 col-6 mb-4">
    <div
      class="cat-box text-center nav-link"
      id="sushi-tab"
      data-bs-toggle="tab"
      data-bs-target="#sushi"
      type="button"
      role="tab"
      aria-controls="sushi"
      aria-selected="true"
    >
      <img src="../../../assets/category/sushi.svg" width="80px" alt="" />

      <p class="cat-name mt-3 fw-bold">Sushi</p>
    </div>
  </div>

  <div class="col-lg-2 col-md-3 col-6 mb-4">
    <div class="cat-box text-center">
      <img src="../../../assets/category/burger.svg" width="80px" alt="" />
      <p class="cat-name mt-3 fw-bold">Burger</p>
    </div>
  </div>
</template>

<script>
export default {};
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
