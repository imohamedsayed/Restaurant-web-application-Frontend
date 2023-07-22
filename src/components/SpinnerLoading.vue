<template>
  <div class="loading-spinner" v-if="loading">
    <div class="loader-item">
      <div class="loader loader-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loading"],
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: grid;
  place-content: center;
}

.loader {
  width: 250px;
  height: 250px;
  position: relative;
  margin: auto;
  border-radius: 20px;
  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &-list {
    display: grid;
    grid-template: repeat(3, 120px) / repeat(3, 120px);
    grid-gap: 40px;
  }

  &-item {
    display: flex;
    background: rgba(0, 0, 0, 0.007);
  }
}

.loader-1 {
  &::before,
  &::after {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    top: calc(10% - 15px);
    left: calc(10% - 15px);
    animation: {
      duration: 3s;
      timing-function: linear;
      iteration-count: infinite;
    }
  }

  &::before {
    border: {
      style: solid;
      width: 5px 3px 3px 0;
      color: #9c8080 transparent transparent;
    }

    transform: scale(0.3) rotate(0deg);
    opacity: 0.5;
    animation-name: foregroundCircle;
  }

  &::after {
    background: var(--dark-orange);
    opacity: 0.5;
    transform: scale(0);
    animation-name: backgroundCircle;
  }
}

@keyframes foregroundCircle {
  0% {
    transform: scale(0.3) rotate(0deg);
  }
  12.5% {
    transform: scale(0.3) rotate(180deg);
  }
  25%,
  50% {
    opacity: 1;
  }
  50% {
    transform: scale(1) rotate(720deg);
  }
  100% {
    transform: scale(0.3) rotate(1800deg);
    opacity: 0.5;
  }
}

@keyframes backgroundCircle {
  12.5% {
    transform: scale(0.3);
  }
  90%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
