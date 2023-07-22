<template>
  <div class="login">
    <div class="container">
      <div class="login-form">
        <form @submit.prevent="login">
          <div class="form-h">
            <div class="logo">
              <img src="@/assets/logo.png" class="img-fluid" alt="" />
            </div>
            <h2 class="m-0">Admin Login</h2>
          </div>
          <hr />
          <div class="form-content mt-5">
            <div class="input-field">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                v-model="state.email"
              />
              <span class="text-danger fw-bold" v-if="v$.email.$error">
                {{ v$.email.$errors[0].$message }}
              </span>
            </div>
            <div class="input-field">
              <input
                type="password"
                name="password"
                placeholder="Enter your password "
                v-model="state.password"
              />
              <span class="text-danger fw-bold" v-if="v$.password.$error">
                {{ v$.password.$errors[0].$message }}
              </span>
            </div>

            <div class="text-center mt-5">
              <button class="login-btn">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import LandingHeader from "@/components/LandingHeader.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { reactive, computed, onMounted } from "vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
export default {
  components: { LandingHeader, SpinnerLoading },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      email: "",
      password: "",
      loading: false,
      user: computed(() => store.state.user),
    });

    onMounted(() => {
      if (state.user) {
        if (!state.user.role) {
          router.push("/");
        }
      }
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      };
    });
    const v$ = useVuelidate(rules, state);

    const login = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.loading = true;

        try {
          let data = {
            email: state.email,
            password: state.password,
          };

          await store.dispatch("AdminLogin", data);

          toast.success("Login Successfully", {
            autoClose: 1000,
          });

          router.push("/dashboard/");
        } catch (err) {
          toast.error(err, {
            autoClose: 1000,
          });
        }

        state.loading = false;
      } else {
        toast.error("Missing Data", {
          autoClose: 1000,
        });
      }
    };

    return { state, v$, login };
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background: url("../../assets/adminLogin.jpg") top center;
  padding-top: 200px;
  .login-form {
    form {
      width: 720px;
      margin: 0 auto;
      backdrop-filter: blur(10px);
      padding: 40px;
      box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
      @media (max-width: 768px) {
        width: 100%;
      }
      .form-h {
        display: flex;
        align-items: center;
        gap: 20px;
        .logo {
          img {
            width: 50px;
          }
        }
      }
      .form-content {
        .input-field {
          margin-bottom: 50px;

          input {
            width: 100%;
            height: 60px;
            padding-left: 20px;
            margin-bottom: 10px;
            border: none;
            outline: none;
            border-bottom: 3px solid var(--light-orange);
            border-radius: 10px;
            transition: all 0.3s ease;
            &:focus {
              font-size: 1.4rem;
            }
          }
        }

        .login-btn {
          width: 120px;
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
