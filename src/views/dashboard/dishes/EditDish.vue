<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-brands fa-wpforms me-2"></i>Edit Dish
          <span class="text-muted fs-3"> {{ id }}</span>
        </h2>
        <div class="ground">
          <form @submit.prevent="editDish">
            <div class="row">
              <div class="col-md-6 col-12 mb-4">
                <label>Dish name</label>
                <input type="text" v-model="state.product" />
                <span class="text-danger fw-bold" v-if="v$.product.$error">
                  {{ v$.product.$errors[0].$message }}
                </span>
              </div>
              <div class="col-md-6 col-12 mb-4">
                <label>Dish Price</label>
                <input type="text" v-model="state.price" />
                <span class="text-danger fw-bold" v-if="v$.price.$error">
                  {{ v$.price.$errors[0].$message }}
                </span>
              </div>
              <div class="col-md-6 col-12 mb-4">
                <label>Category</label>
                <select v-model="state.category" v-if="state.categories.length">
                  <option
                    :value="cat._id"
                    v-for="cat in state.categories"
                    :key="cat._id"
                  >
                    {{ cat.name }}
                  </option>
                </select>
                <p class="alert alert-danger" v-else>You have no categories</p>
                <span class="text-danger fw-bold" v-if="v$.category.$error">
                  {{ v$.category.$errors[0].$message }}
                </span>
              </div>
              <div class="col-md-6 col-12 mb-4">
                <label>Dish Image</label>
                <label class="for-image label" for="img"
                  ><i class="fa-solid fa-cloud-arrow-up"></i>
                  <span>Upload Img</span></label
                >
                <input
                  type="file"
                  hidden
                  id="img"
                  @change="
                    (e) => {
                      state.img = e.target.files[0];
                    }
                  "
                />
              </div>
            </div>
            <div class="text-center mt-5 w-100">
              <button class="m-auto">Update</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";
import { reactive, computed, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, numeric } from "@vuelidate/validators";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";
import axios from "axios";

export default {
  components: { SideBar, Header, SpinnerLoading },
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      product: "",
      img: "",
      price: "",
      category: "",
      loading: false,
      categories: [],
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

      // fetching categories
      state.loading = true;

      try {
        const res = await axios.get("/api-dashboard/category/");
        state.categories = res.data.categories;
      } catch (err) {
        toast.error(err.response.data.message);
      }

      // fetching the dish

      try {
        const dishRes = await axios.get("/api-dashboard/dishes/" + props.id);
        const dish = dishRes.data.dish;

        state.product = dish.name;
        state.price = dish.price;
        state.category = dish.category;
      } catch (err) {
        toast.error("something went wrong, please try again later");
      }

      state.loading = false;
    });

    const rules = computed(() => {
      return {
        product: { required },
        category: { required },
        price: { required, numeric },
      };
    });

    const v$ = useVuelidate(rules, state);

    const editDish = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        const data = {
          name: state.product,
          price: state.price,
          category: state.category,
          image: state.img,
        };
        state.loading = true;
        try {
          const res = await axios.put(
            "/api-dashboard/dishes/" + props.id,
            data,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          if (res.status == 200) {
            toast.success("Dish updated successfully", {
              autoClose: 2000,
            });
          } else {
            const err = res.response.data.errors;
            if (err) {
              for (var prop in err) {
                if (err[prop]) {
                  toast.error(err[prop]);
                }
              }
            } else {
              toast.error("Something went wrong, please try again later");
            }
          }
        } catch (err) {
          toast.error("Something went wrong, please try again later");
        }

        state.loading = false;
      } else {
        toast.error("Invalid or missing data", {
          autoClose: 1500,
        });
      }
    };

    return { state, v$, editDish };
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
      form {
        input,
        select {
          width: 100%;
        }
        select {
          height: 40px;
          border-radius: 10px;
          border: 1px solid var(--dark-orange);
          transition: all 0.3s ease;
          &:focus {
            outline: none;
            font-size: 1.2rem;
          }
        }
        label {
          display: block;
          margin-bottom: 15px;
          font-weight: bold;
          font-size: 1.4rem;
        }
        .label {
          margin: 0 auto;
          width: 200px;
          height: 80px;
          background: #fff;
          display: grid;
          text-align: center;
          font-size: 1.4rem !important;
          place-content: center;
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          &:hover {
            transform: scale(1.02);
          }
          i {
            display: block;
          }
        }
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
