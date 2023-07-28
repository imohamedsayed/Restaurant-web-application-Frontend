<template>
  <li class="d-flex justify-content-between align-items-center mb-3">
    <span class="item-name"> {{ dish.name }} </span>
    <span class="price">{{ dish.price }}$</span>
    <span class="item-options" @click="addToCart">
      <i class="fa-solid fa-cart-plus"></i>
    </span>
  </li>
</template>

<script>
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

export default {
  props: ["dish"],
  setup(props) {
    const store = useStore();
    const addToCart = () => {
      store.dispatch("addToCart", { id: props.dish._id });
      toast.success(props.dish.name + " Added to cart", {
        autoClose: 1000,
      });
    };
    return { addToCart };
  },
};
</script>

<style lang="scss" scoped>
li {
  background: #99999922;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background: #9999995a;
  }
  .price {
    color: green;
    font-weight: 600;
  }
  .item-options {
    color: var(--light-orange);
    i {
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.5);
      }
    }
  }
}
</style>
