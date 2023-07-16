<template>
  <aside>
    <router-link :to="{ name: 'HomePage' }">
      <i class="fa-solid fa-home"></i>
      <span>Home</span>
    </router-link>
    <router-link :to="{ name: 'Menu' }">
      <i class="fa-solid fa-utensils"></i>
      <span>Menu</span>
    </router-link>
    <router-link :to="{ name: 'Cart' }">
      <i class="fa-solid fa-cart-shopping"></i>
      <span>Cart</span>
    </router-link>
    <a href="#">
      <i class="fa-solid fa-receipt"></i>
      <span>Bills</span>
    </a>
    <a href="#">
      <i class="fa-solid fa-gear"></i>
      <span>Settings</span>
    </a>
    <div>
      <img src="../../assets/logo.png" width="100px" class="img-fluid" alt="" />
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
aside {
  width: 130px;
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
  padding: 40px 20px;
  a {
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    text-align: center;
    font-size: 1.2rem;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.4s ease;
    i {
      display: block;
      margin-bottom: 10px;
    }
    &:hover {
      color: var(--dark-orange);
    }
    &.router-link-exact-active {
      background: var(--dark-orange);
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
