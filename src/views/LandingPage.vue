<template>
  <div class="landing-page">
    <LandingHeader />
    <div class="container">
      <div class="intro">
        <div class="intro-content">
          <p class="h1">Choosing Healthy &amp; Fresh Food</p>
          <p class="text-muted">
            just confirm place your order and enjoy our delicious fastest
            delivery
          </p>
          <div class="actions">
            <button class="btn order-now" @click="$router.push('/home')">
              Order Now
            </button>
            <button class="btn see-menu" @click="$router.push('/home')">
              See Menu
            </button>
          </div>
        </div>
        <img src="../assets/burger.png" alt="" class="back-photo" />
        <div class="food-img">
          <img src="../assets/burger.png" class="img-fluid" alt="" />
        </div>
        <i class="fa-solid fa-angles-down go-down" @click="scrollDown"></i>
      </div>
      <div class="book-table">
        <h2>Book A Table</h2>
        <form @submit.prevent="book">
          <div class="date">
            <p>Date</p>
            <input type="date" v-model="state.date" />
            <span class="text-danger" v-if="v$.date.$error">
              {{ v$.date.$errors[0].$message }}
            </span>
          </div>
          <div class="time">
            <p>Time</p>
            <input type="time" v-model="state.time" />
            <span class="text-danger" v-if="v$.time.$error">
              {{ v$.time.$errors[0].$message }}
            </span>
          </div>
          <div class="email">
            <p>Email</p>
            <input
              type="email"
              placeholder="type your mail address"
              v-model="state.email"
            />
            <span class="text-danger" v-if="v$.email.$error">
              {{ v$.email.$errors[0].$message }}
            </span>
          </div>
          <div class="action">
            <button type="submit">Book a table</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import LandingHeader from "@/components/LandingHeader.vue";
export default {
  name: "Landing page",
  components: { LandingHeader },
  setup() {
    const state = reactive({
      date: "",
      time: "",
      email: "",
    });

    const rules = computed(() => {
      return {
        date: { required },
        time: { required },
        email: { required, email },
      };
    });

    const v$ = useVuelidate(rules, state);

    const scrollDown = () => {
      window.scrollTo(
        0,
        document.body.scrollHeight || document.documentElement.scrollHeight
      );
    };
    const book = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
      } else {
      }
    };

    return { scrollDown, v$, state, book };
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  .intro {
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-top: 40px;
    height: calc(100vh - 380px);
    @media (max-width: 592px) {
      height: calc(100vh - 80px);
    }
    .go-down {
      position: absolute;
      bottom: 30px;
      background-color: #fff;
      padding: 20px;
      border-radius: 50px;
      display: none;
      color: var(--light-orange);
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      cursor: pointer;
      transition: all 0.3s ease;
      animation: arrow 0.8s ease infinite;
      &:hover {
        color: #fff;
        background: var(--light-orange);
      }
      @media (max-width: 768px) {
        display: inline;
      }
      @keyframes arrow {
        0% {
          bottom: 50px;
        }
        50% {
          bottom: 60px;
        }
        100% {
          bottom: 50px;
        }
      }
    }
    .back-photo {
      position: absolute;
      width: 500px;
      z-index: -1;
      right: -250px;
      opacity: 0.4;
      display: none;
      @media (max-width: 768px) {
        display: inline;
      }
    }
    justify-content: space-around;
    .intro-content {
      @media (max-width: 768px) {
        backdrop-filter: blur(2px);
        padding: 10px;
      }
      p {
        &.h1 {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 30px;
          @media (max-width: 592px) {
            font-size: 30px;
          }
        }
        &.text-muted {
          font-size: 1.2rem;
          margin-bottom: 30px;
          @media (max-width: 592px) {
            font-size: 1rem;
          }
        }
      }
      button {
        width: 150px;
        height: 60px;
        font-size: 1.3rem;
        @media (max-width: 450px) {
          width: 100px;
          height: 60px;
          font-size: 1rem;
        }
        &.order-now {
          background: var(--light-orange);
          color: #fff;
          border-top-right-radius: 25px;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;

          transition: all 0.3s ease-in-out;
          &:hover {
            background: var(--dark-orange);
          }
        }
        &.see-menu {
          color: var(--light-orange);
          position: relative;
          transition: all 0.6s ease;

          margin-left: 10px;

          &:before {
            content: "";
            width: 60px;
            height: 2px;
            background: var(--light-orange);
            position: absolute;
            bottom: 0;
            left: 34%;
          }
          &:hover {
            background: var(--dark-orange);
            color: #fff;
            border-top-left-radius: 25px;
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
          }
        }
      }
    }
    .food-img {
      img {
        width: 700px;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .book-table {
    h2 {
      margin-bottom: 20px;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 20px;
      box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      flex-wrap: wrap;
      @media (max-width: 768px) {
        flex-direction: column;
        > div {
          margin-bottom: 40px;
          width: 100%;
          &.action {
            text-align: center;
          }
        }
      }
      p {
        font-weight: bold;
        margin-bottom: 30px;
      }
      input {
        border: none;
        outline: none;
        width: 100%;
        margin-bottom: 10px;
      }
      button {
        background: var(--light-orange);
        width: 200px;
        height: 80px;
        font-size: 1.2rem;
        border: none;
        color: white;
        border-radius: 20px;
        transition: all 0.3s ease;

        &:hover {
          background: var(--dark-orange);
          font-size: 1.4rem;
        }
      }
    }
  }
}
</style>
