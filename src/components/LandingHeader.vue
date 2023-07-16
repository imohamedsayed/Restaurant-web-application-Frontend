<template>
  <header
    class="landing-header d-flex justify-content-between align-items-center"
  >
    <div class="logo">
      <router-link :to="{ name: 'Landing' }">
        <img src="../assets/logo.png" class="img-fluid" alt="" />
      </router-link>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'UserLogin' }">
        <button class="btn me-4 login">Login</button>
      </router-link>
      <router-link :to="{ name: 'UserSignup' }">
        <button class="btn signup">Signup</button>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 80px;
  padding: 20px 40px;
  .logo {
    img {
      width: 60px;
    }
  }
  .actions {
    button {
      width: 100px;
      transition: all 0.3s ease;

      &.login {
        &:hover {
          transform: scale(1.5);
          font-weight: bold;
          color: #000;
        }
        &:focus {
          outline: none;
          border: none;
        }
      }
      &.signup {
        background: linear-gradient(to bottom right, #555, #000) !important;
        color: white;

        &:hover {
          font-weight: bold;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
