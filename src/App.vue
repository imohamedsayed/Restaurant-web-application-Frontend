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
}

.has-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.has-scrollbar::-webkit-scrollbar-thumb {
  background: var(--dark-orange);
  padding: 10px 0;
  border-radius: 25px;
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
