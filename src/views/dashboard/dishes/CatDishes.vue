<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-solid fa-clipboard-list me-2 fa-bounce"></i>Dishes
        </h2>
        <div class="ground">
          <div class="up-area">
            <button @click="$router.push('/dashboard/dishes/add-dish')">
              <i class="fa-solid fa-plus fa-beat me-2"></i> Add new dish
            </button>
          </div>
          <input
            type="search"
            class="search my-5"
            placeholder="search for a dish"
            v-model="state.searchItem"
            @keyup="search(state.searchItem)"
          />
          <DishesList :dishes="state.display" />
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";
import DishesList from "@/components/dashboard/dishes/DishesList.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";
import axios from "axios";

export default {
  components: { SideBar, Header, DishesList, SpinnerLoading },
  props: ["id"],
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      loading: false,
      dishes: [],
      display: [],
      searchItem: "",

      user: computed(() => store.state.user),
    });

    onMounted(async () => {
      if (!state.user) {
        router.push("/");
      } else {
        if (!state.user.role) {
          router.push("/");
        }
      }

      state.loading = true;

      try {
        const res = await axios.get(
          "/api-dashboard/dishes/category/" + props.id
        );

        state.dishes = res.data.dishes;
        state.display = state.dishes;
      } catch (err) {
        toast.error("something went wrong while getting dishes");
      }

      state.loading = false;
    });
    const search = (key) => {
      state.display = state.dishes.filter((dish) =>
        dish.name.toLowerCase().includes(key.toLowerCase())
      );
    };
    return { state, search };
  },
};
</script>
<style lang="scss" scoped>
.dash-view {
  display: flex;
  main {
    height: calc(100vh - 0px);
    flex: 1;
    background: #fff;
    overflow: auto;
    padding-left: 18rem;
    @media (max-width: 572px) {
      margin: 0;
    }
    @media (max-width: 991px) {
      padding-left: 0;
    }

    h2 {
      font-weight: bold;
      letter-spacing: 3px;
      i {
        color: var(--dark-orange);
      }
    }
    .ground {
      padding: 40px;
      border-radius: 25px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      background: var(--bg-black-100);
      .up-area {
        margin-bottom: 30px;
        button {
          width: 220px;
          display: block;
          height: 40px;
          border: none;
          outline: none;
          background: linear-gradient(
            to bottom right,
            var(--light-orange),
            var(--dark-orange)
          );
          opacity: 0.9;
          border-radius: 10px;
          color: white;
          transition: all 0.3s ease;
          &:hover {
            opacity: 1;

            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
