<template>
  <div
    class="menu tab-pane fade show active"
    id="checkin"
    role="tabpanel"
    aria-labelledby="checkin-tab"
  >
    <h2 class="fw-bold mb-5">Checkin Menu</h2>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12">
        <div class="menu-item">
          <div class="img">
            <img
              src="../../../assets/dishes/shrimp.jpg"
              class="img-fluid mb-2"
              alt=""
            />
          </div>
          <div
            class="details mt-2 d-flex align-items-center justify-content-between"
          >
            <div class="info">
              <h6 class="fw-bold">Boiled Shrimp</h6>

              <p class="price fw-bold">
                $12.62
                <span class="text-secondary"><sub>/per portion</sub></span>
              </p>
            </div>
            <div class="order me-4">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="menu tab-pane fade show"
    id="sushi"
    role="tabpanel"
    aria-labelledby="sushi-tab"
  >
    <h2 class="fw-bold mb-5">Sushi Menu</h2>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-12">
        <div class="menu-item">
          <div class="img">
            <img
              src="../../../assets/dishes/shrimp.jpg"
              class="img-fluid mb-2"
              alt=""
            />
          </div>
          <div
            class="details mt-2 d-flex align-items-center justify-content-between"
          >
            <div class="info">
              <h6 class="fw-bold">Boiled Shrimp</h6>

              <p class="price fw-bold">
                $12.62
                <span class="text-secondary"><sub>/per portion</sub></span>
              </p>
            </div>
            <div class="order me-4">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="menu-item">
          <div class="img">
            <img
              src="../../../assets/dishes/shrimp.jpg"
              class="img-fluid mb-2"
              alt=""
            />
          </div>
          <div
            class="details mt-2 d-flex align-items-center justify-content-between"
          >
            <div class="info">
              <h6 class="fw-bold">Boiled Shrimp</h6>

              <p class="price fw-bold">
                $12.62
                <span class="text-secondary"><sub>/per portion</sub></span>
              </p>
            </div>
            <div class="order me-4">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="menu-item">
          <div class="img">
            <img
              src="../../../assets/dishes/shrimp.jpg"
              class="img-fluid mb-2"
              alt=""
            />
          </div>
          <div
            class="details mt-2 d-flex align-items-center justify-content-between"
          >
            <div class="info">
              <h6 class="fw-bold">Boiled Shrimp</h6>

              <p class="price fw-bold">
                $12.62
                <span class="text-secondary"><sub>/per portion</sub></span>
              </p>
            </div>
            <div class="order me-4">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-12">
        <div class="menu-item">
          <div class="img">
            <img
              src="../../../assets/dishes/shrimp.jpg"
              class="img-fluid mb-2"
              alt=""
            />
          </div>
          <div
            class="details mt-2 d-flex align-items-center justify-content-between"
          >
            <div class="info">
              <h6 class="fw-bold">Boiled Shrimp</h6>

              <p class="price fw-bold">
                $12.62
                <span class="text-secondary"><sub>/per portion</sub></span>
              </p>
            </div>
            <div class="order me-4">
              <i class="fa-solid fa-cart-plus"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 100px;
  .menu-item {
    border-radius: 10px;
    transition: all 0.3s ease-out;
    margin-bottom: 20px;
    &:hover {
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }
    img {
      width: 100%;
    }
    .details {
      padding: 10px;
      .order {
        margin-bottom: 10px;
        i {
          color: var(--dark-orange);
          font-size: 1.3rem;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            font-size: 1.6rem;
            color: var(--light-orange);
          }
        }
      }
    }
  }
}
</style>
