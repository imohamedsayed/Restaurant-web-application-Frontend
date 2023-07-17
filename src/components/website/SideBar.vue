<template>
  <aside>
    <div class="mb-4">
      <img src="../../assets/logo.png" width="100px" class="img-fluid" alt="" />
    </div>
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
    <router-link :to="{ name: 'Bills' }">
      <i class="fa-solid fa-receipt"></i>
      <span>Bills</span>
    </router-link>
    <router-link :to="{ name: 'Settings' }">
      <i class="fa-solid fa-gear"></i>
      <span>Settings</span>
    </router-link>
  </aside>
  <div class="mobile-nav">
    <router-link :to="{ name: 'HomePage' }">
      <i class="fa-solid fa-home"></i>
    </router-link>
    <router-link :to="{ name: 'Menu' }">
      <i class="fa-solid fa-utensils"></i>
    </router-link>
    <router-link :to="{ name: 'Cart' }" class="cart">
      <i class="fa-solid fa-cart-shopping"></i>
    </router-link>
    <router-link :to="{ name: 'Bills' }">
      <i class="fa-solid fa-receipt"></i>
    </router-link>
    <router-link :to="{ name: 'Settings' }">
      <i class="fa-solid fa-gear"></i>
    </router-link>
  </div>
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
  @media (max-width: 572px) {
    display: none;
  }
  img {
    width: 80px;
  }
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
.mobile-nav {
  @media (max-width: 572px) {
    display: flex;
  }
  display: none;
  position: fixed;
  background: #fff;

  width: 100%;
  bottom: 0;
  height: 60px;
  justify-content: space-around;
  align-items: center;
  font-size: 1.6rem;
  box-shadow: 1px -1px 4px 1px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  .cart {
    margin-bottom: 40px;
    font-size: 1.7rem;
    padding: 15px 20px;
    border-radius: 50px;
    border: 1px solid #cbcbcb;
    background: #fff;
  }
  a {
    color: var(--light-orange);
    transition: all 0.3s ease;

    &:hover {
      color: var(--dark-orange);
    }
    &.router-link-exact-active {
      color: var(--dark-orange);
      border-bottom: 2px solid var(--dark-orange);

      &:hover {
        color: var(--light-orange);
      }
    }
  }
}
</style>
