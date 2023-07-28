<template>
  <div class="cart-item d-flex align-items-center gap-3 mb-4">
    <div class="img">
      <img
        :src="'http://localhost:8000/' + product.image"
        class="img-fluid"
        alt=""
      />
    </div>
    <div class="details">
      <h4 class="fw-bold mb-3">{{ product.name }}</h4>
      <div class="price-qty d-flex align-items-center justify-content-between">
        <p class="price fw-bold m-0">{{ product.price }}$</p>
        <div class="qty">
          <button class="btn minus">-</button>
          <input
            type="number"
            min="1"
            style="width: 70px"
            class="mx-2"
            v-model="state.qty"
          />
          <button class="btn add">+</button>
        </div>
      </div>
    </div>
    <i class="fa-solid fa-trash remove"></i>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";

export default {
  props: ["product"],
  setup(props) {
    const store = useStore();
    const state = reactive({
      cart: computed(() => store.state.cart),
      qty: props.product.qty,
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped>
.cart-item {
  position: relative;
  flex-wrap: wrap;
  .img {
    img {
      border-radius: 10px;
      width: 200px;
      height: 140px;
    }
  }
  .details {
    flex: 1;
    .qty {
      input {
        height: 35px;
      }
      button {
        opacity: 0.7;
        transition: all 0.3s ease;
        &:hover {
          opacity: 1;
          transform: scale(1.09);
        }
        &.minus {
          border: 1px solid #000;
        }
        &.add {
          background: var(--dark-orange);
          color: #fff;
        }
      }
    }
  }
  .remove {
    position: absolute;
    right: 10px;
    top: 10px;
    color: crimson;
    font-size: 1.3rem;
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }
  }
}
</style>
