<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-solid fa-clipboard-list me-2 fa-bounce"></i>Categories
        </h2>
        <div class="ground">
          <div class="up-area">
            <button @click="$router.push('/dashboard/categories/add-category')">
              <i class="fa-solid fa-plus fa-beat me-2"></i> Add new category
            </button>
          </div>
          <div>
            <input
              type="search"
              class="search my-5"
              placeholder="search for category"
              v-model="state.searchItem"
              @keyup="search(state.searchItem)"
            />
            <CategoriesList :categories="state.display" />
          </div>
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";
import CategoriesList from "@/components/dashboard/category/CategoriesList.vue";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";

export default {
  components: { SideBar, Header, CategoriesList, SpinnerLoading },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      loading: false,
      user: computed(() => store.state.user),
      categories: [],
      display: [],
      searchItem: "",
    });

    onMounted(async () => {
      if (!state.user) {
        router.push("/");
      } else {
        if (!state.user.role) {
          router.push("/");
        }
      }

      // Start Getting categories
      state.loading = true;

      try {
        const res = await axios.get("/api-dashboard/category");

        if (res.status == 200) {
          state.categories = res.data.categories;
          state.display = state.categories;
        }
      } catch (err) {
        toast.error("something went wrong, try again later", {
          autoClose: 1500,
        });
      }

      state.loading = false;
    });

    const search = (key) => {
      state.display = state.categories.filter((cat) =>
        cat.name.toLowerCase().includes(key.toLowerCase())
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
