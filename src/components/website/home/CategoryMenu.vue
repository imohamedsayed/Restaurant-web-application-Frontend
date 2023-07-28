<template>
  <div
    class="menu tab-pane fade show"
    :id="category._id"
    role="tabpanel"
    :aria-labelledby="category._id + '-tab'"
  >
    <h2 class="fw-bold mb-5">{{ category.name }} Menu</h2>
    <div class="row" v-if="state.products.length">
      <div
        class="col-lg-3 col-md-6 col-12"
        v-for="product in state.products"
        :key="product._id"
      >
        <Product :product="product" />
      </div>
    </div>
    <div class="alert alert-info" v-else>
      There no {{ category.name }} dishes available now
    </div>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import { reactive, onMounted } from "vue";
import { toast } from "vue3-toastify";
import Product from "./Product.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import axios from "axios";

export default {
  components: { Product, SpinnerLoading },
  props: ["category"],
  setup(props) {
    const state = reactive({
      loading: false,
      products: [],
    });

    onMounted(async () => {
      document.querySelectorAll(".menu")[0].classList.add("active");

      state.loading = true;
      try {
        const res = await axios.get(
          "/api/dishes/category/" + props.category._id
        );
        if (res.status == 200) {
          state.products = res.data.dishes;
        } else {
          toast.error("Something went wrong, please try again later");
        }
      } catch (err) {
        toast.error("Something went wrong, please try again later");
      }
      state.loading = false;
    });
    return { state };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  margin-top: 100px;
}
</style>
