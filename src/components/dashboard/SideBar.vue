<template>
  <aside ref="aside">
    <div class="logo">
      <img src="../../assets/logo.png" class="img-fluid" alt="" />
    </div>
    <ul class="list-unstyled mt-5">
      <router-link :to="{ name: 'HomeDash' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-home"></i>
            <span>Home</span>
          </div>
        </li>
      </router-link>
      <div>
        <li
          class="d-flex justify-content-between align-items-center"
          data-bs-target="#second-categories"
          aria-expanded="false"
          data-bs-toggle="collapse"
        >
          <div class="section-name box-title">
            <i class="fa-solid fa-kitchen-set"></i>
            <span>Categories</span>
          </div>
          <i class="fa-solid fa-sort-down"></i>
        </li>
        <div class="collapse" id="second-categories">
          <ul class="list-unstyled">
            <router-link :to="{ name: 'AddCategory' }">
              <li
                class="d-flex justify-content-between align-items-center second-li px-4"
              >
                <div class="section-name">
                  <i class="fa-solid fa-plus"></i>
                  <span> Add category</span>
                </div>
              </li>
            </router-link>
            <router-link :to="{ name: 'AllCategories' }">
              <li
                class="d-flex justify-content-between align-items-center second-li px-4"
              >
                <div class="section-name">
                  <i class="fa-regular fa-eye"></i>
                  <span> Show categories </span>
                </div>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <div>
        <li
          class="d-flex justify-content-between align-items-center"
          data-bs-target="#second-dishes"
          aria-expanded="false"
          data-bs-toggle="collapse"
        >
          <div class="section-name box-title">
            <i class="fa-solid fa-bowling-ball"></i>
            <span>Dishes</span>
          </div>
          <i class="fa-solid fa-sort-down"></i>
        </li>
        <div class="collapse" id="second-dishes">
          <ul class="list-unstyled">
            <router-link :to="{ name: 'AddDish' }">
              <li
                class="d-flex justify-content-between align-items-center second-li px-4"
              >
                <div class="section-name">
                  <i class="fa-solid fa-plus"></i>
                  <span> Add dish</span>
                </div>
              </li>
            </router-link>
            <router-link :to="{ name: 'AllDishes' }">
              <li
                class="d-flex justify-content-between align-items-center second-li px-4"
              >
                <div class="section-name">
                  <i class="fa-regular fa-eye"></i>
                  <span> All dishes </span>
                </div>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <router-link :to="{ name: 'Orders' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-truck-ramp-box"></i>
            <span>Orders</span>
          </div>
        </li>
      </router-link>
      <router-link :to="{ name: 'Users' }">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-users"></i>
            <span>Users</span>
          </div>
        </li>
      </router-link>
      <hr class="bg-light text-light" />
      <div class="flex"></div>
      <a @click="logout">
        <li class="d-flex justify-content-between align-items-center">
          <div class="section-name">
            <i class="fa-solid fa-right-from-bracket fa-rotate-180"></i>
            <span class="text-danger">Logout</span>
          </div>
        </li>
      </a>
    </ul>
  </aside>
  <div class="asideToggler" @click="openAside">
    <i class="fa-solid fa-bars"></i>
  </div>
</template>

<script>
export default {
  methods: {
    openAside() {
      this.$refs.aside.classList.toggle("open");
    },
    logout() {
      this.$store.dispatch("Logout");
      this.$router.push("/dashboard/login");
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  width: 280px;
  background: #000;
  padding: 20px;
  z-index: 999;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;

  transition: all 0.4s ease-in-out;
  .logo {
    text-align: center;
    img {
      width: 80px;
    }
  }
  .box-title {
    font-size: 1.4rem;
    color: #999;
  }
  ul {
    padding: 0;
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    > div {
      margin: 10px 0;
    }
    a {
      text-decoration: none;
      color: #999;
    }
    > a {
      margin: 10px 0;
    }
    ul {
      > a {
        margin: 0 !important;
      }
    }
    li {
      padding: 10px;
      transition: all 0.4s ease-out;
      cursor: pointer;
      padding-left: 16px;
      margin: 5px 0;
      i {
        color: var(--light-orange);
        margin-right: 15px;
      }

      &.second-li {
        padding: 10px;
        transition: all 0.4s ease-out;
        cursor: pointer;
        margin: 5px 0;
        font-size: 1rem;

        i {
          color: var(--light-orange);
          margin-right: 10px;
        }
        span {
          font-weight: 340;
        }
      }

      span {
        font-weight: 500;
      }

      &:hover {
        color: #fff;
        background: var(--light-orange);
        i {
          color: #fff;
        }
      }

      i {
        margin-left: 10px;
      }
    }
  }

  a {
    &.router-link-exact-active li {
      background: var(--dark-orange) !important;
      color: #fff;
      i {
        color: #fff;
      }
    }

    &.router-link-exact-active li {
      padding-left: 10px;
      border-left: 6px solid rgba(181, 176, 176, 0.797);
    }
  }

  @media (max-width: 991px) {
    position: fixed;
    right: 0;
    transform: translateX(-285px);
    box-shadow: 1px 2px 10px 2px rgba(102, 102, 102, 0.826);

    &.open {
      transform: translateX(0);
    }
  }
}
.asideToggler {
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 5px;
  z-index: 1000;
  font-size: 1.5rem;
  padding: 6px 14px;
  color: #fff;
  cursor: pointer;
  display: none;
  transition: all 0.3s ease;
  background: linear-gradient(
    to top right,
    var(--light-orange),
    var(--dark-orange)
  );
  &:hover {
    transform: scale(1.09);
  }
  @media (max-width: 991px) {
    display: block;
  }
}
</style>
