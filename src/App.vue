<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  overflow-x: hidden;
}
:root {
  --light-orange: #fa942a;
  --dark-orange: #ea5223;
  --blue-color: #0f748fb3;
  --active-color: #19c8fa;
  --dark-color: #19283f;
  --green-color: #33d1cc;
  --red-color: #ff3150;
  --yellow-color: #ffc400;
  --section-color: #eff7fa;
  --pink-color: #ff8f9c;
  --bg-black-900: #f2f2fc;
  --bg-black-100: #fdf9ff;
  --bg-black-50: #ffffff;
  --text-black-900: #302e4d;
  --text-black-700: #504e70;
  --skin-color: #ec1839;
  --intro-color: #747474a3;
  --footer-color: #212121;
}

.has-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--dark-orange);
  padding: 10px 0;
  border-radius: 25px;
}
.days div {
  font-size: 1.3rem;
  margin: 0.3rem;
  width: calc(24.2rem / 9);
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  &:hover:not(.today) {
    background-color: var(--light-orange);
    border: 0.02rem solid #777;
    cursor: pointer;
  }
  &.today {
    background-color: var(--dark-orange);
    color: white;
  }
  &.prev-date,
  &.next-date {
    opacity: 0.5;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
