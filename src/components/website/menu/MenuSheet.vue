<template>
  <div class="col-lg-4 col-md-6 col-12">
    <div class="menu-sheet mb-5">
      <h4 class="menu-header text-center">Pizza</h4>
      <div class="menu-items mt-5">
        <ul class="list-unstyled p-0">
          <li class="d-flex justify-content-between align-items-center mb-3">
            <span class="item-name"> Pizza checkin ranch </span>
            <span class="price">20$</span>

            <span class="item-options">
              <i class="fa-solid fa-cart-plus"></i>
            </span>
          </li>
          <li class="d-flex justify-content-between align-items-center mb-3">
            <span class="item-name"> Pizza Mix Sea Food </span>
            <span class="price">20$</span>
            <span class="item-options">
              <i class="fa-solid fa-cart-plus"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-sheet {
  border: 1px solid var(--light-orange);
  padding: 20px;
  border-radius: 10px;
  border-top-right-radius: 40px;
  position: relative;
  .menu-header {
    background: var(--light-orange);
    color: #fff;
    font-size: 1.9rem;
    position: absolute;
    top: -30px;
    padding: 10px 20px;
    border-radius: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
  .menu-items {
    li {
      background: #99999922;
      padding: 10px;
      border-radius: 5px;
      transition: all 0.3s ease;
      &:hover {
        background: #9999995a;
      }
      .price {
        color: green;
        font-weight: 600;
      }
      .item-options {
        color: var(--light-orange);
        i {
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            transform: scale(1.5);
          }
        }
      }
    }
  }
}
</style>
