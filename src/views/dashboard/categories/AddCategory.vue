<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-brands fa-wpforms me-2"></i>Add Category
        </h2>
        <div class="ground">
          <form @submit.prevent="addCat">
            <div class="row">
              <div class="col-md-6 col-12 mb-4">
                <label>Category name</label>
                <input type="text" v-model="state.category" />
                <span class="text-danger fw-bold" v-if="v$.category.$error">
                  {{ v$.category.$errors[0].$message }}
                </span>
              </div>
              <div class="col-md-6 col-12 mb-4">
                <label>Category Image</label>
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
                <span class="text-danger fw-bold" v-if="v$.img.$error">
                  {{ v$.img.$errors[0].$message }}
                </span>
              </div>
            </div>
            <div class="text-center mt-5 w-100">
              <button class="m-auto">Add</button>
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
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";
import axios from "axios";

import { toast } from "vue3-toastify";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
export default {
  components: { SideBar, Header, SpinnerLoading },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      category: "",
      img: "",
      loading: false,
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
    });

    const rules = computed(() => {
      return {
        category: { required },
        img: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    const addCat = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.loading = true;
        const data = {
          name: state.category,
          image: state.img,
        };
        try {
          // start making post request

          const res = await axios.post("/api-dashboard/category/", data, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

          if (res.status == 201) {
            toast.success("Category Added Successfully", {
              autoClose: 1500,
            });
          } else {
            toast.error("Something went wrong try again", {
              autoClose: 1500,
            });
          }
        } catch (err) {
          toast.error("Something went wrong try again later", {
            autoClose: 1500,
          });
        }

        state.loading = false;
      } else {
        toast.error("Invalid Data", {
          autoClose: 1500,
        });
      }
    };

    return { state, v$, addCat };
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
        input {
          width: 100%;
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
