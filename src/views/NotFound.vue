<template>
  <div class="404 text-center not-found">
    <LandingHeader />
    <img src="../assets/404.png" class="img-fluid" alt="" />
    <h2 class="mt-4">404 | Looks like you're lost</h2>
    <router-link :to="{ name: 'Landing' }">
      <button>Return home</button>
    </router-link>
  </div>
</template>

<script>
import LandingHeader from "@/components/LandingHeader.vue";
export default {
  components: { LandingHeader },
};
</script>

<style lang="scss" scoped>
.not-found {
  img {
    width: 70%;
    height: 65vh;
  }
  h2 {
    color: var(--dark-orange);
  }
  button {
    width: 300px;
    height: 60px;
    border: none;
    outline: none;
    font-size: 1.6rem;
    margin-top: 20px;
    background: linear-gradient(
      to bottom right,
      var(--light-orange),
      var(--dark-orange)
    );
    opacity: 0.9;
    border-radius: 10px;
    color: white;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;

      font-size: 1.9rem;
    }
  }
}
</style>
