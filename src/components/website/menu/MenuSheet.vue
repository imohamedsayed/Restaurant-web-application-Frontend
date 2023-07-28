<template>
  <div class="col-lg-4 col-md-6 col-12" v-if="state.dishes.length">
    <div class="menu-sheet mb-5">
      <h4 class="menu-header text-center">{{ category.name }}</h4>
      <div class="menu-items mt-5">
        <ul class="list-unstyled p-0">
          <Item v-for="dish in state.dishes" :key="dish._id" :dish="dish" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
import { toast } from "vue3-toastify";
import Item from "./Item.vue";
export default {
  components: { Item },
  props: ["category"],
  setup(props) {
    const state = reactive({
      dishes: [],
    });

    onMounted(async () => {
      try {
        const res = await axios.get(
          "/api/dishes/category/" + props.category._id
        );

        state.dishes = res.data.dishes;
      } catch (err) {
        toast.error(
          "Something went wrong while getting " +
            props.category.name +
            " dishes"
        );
      }
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped>
.menu-sheet {
  border: 1px solid var(--light-orange);
  padding: 20px;
  border-radius: 10px;
  border-top-right-radius: 40px;
  position: relative;
  .menu-header {
    background: var(--light-orange);
    color: #fff;
    font-size: 1.9rem;
    position: absolute;
    top: -30px;
    padding: 10px 20px;
    border-radius: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
