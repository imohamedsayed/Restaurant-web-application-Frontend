<template>
  <div class="menu-item">
    <div class="img">
      <img
        :src="'http://localhost:8000/' + product.image"
        class="img-fluid mb-2"
        alt=""
      />
    </div>
    <div class="details mt-2 d-flex align-items-center justify-content-between">
      <div class="info">
        <h6 class="fw-bold">{{ product.name }}</h6>

        <p class="price fw-bold">
          {{ product.price }}
          <span class="text-secondary"><sub>/per portion</sub></span>
        </p>
      </div>
      <div class="order me-4" @click="addToCart(product._id)">
        <i class="fa-solid fa-cart-plus"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import { reactive, computed, onMounted } from "vue";
export default {
  props: ["product"],
  setup(props) {
    const store = useStore();
    const state = reactive({
      cart: computed(() => store.state.cart),
    });

    const addToCart = (id) => {
      store.dispatch("addToCart", { id });
      toast.success(`${props.product.name} Added to cart`, {
        autoClose: 1000,
      });
    };
    return { addToCart };
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  border-radius: 10px;
  transition: all 0.3s ease-out;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 200px;
  }
  .details {
    padding: 10px;
    .order {
      margin-bottom: 10px;
      i {
        color: var(--dark-orange);
        font-size: 1.3rem;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          font-size: 1.6rem;
          color: var(--light-orange);
        }
      }
    }
  }
}
</style>
