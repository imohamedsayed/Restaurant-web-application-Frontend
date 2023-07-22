<template>
  <div class="signup">
    <LandingHeader />
    <div class="container">
      <div class="signup-form">
        <form @submit.prevent="signup">
          <div class="form-h">
            <div class="logo">
              <img src="@/assets/logo.png" class="img-fluid" alt="" />
            </div>
            <h2 class="m-0">Sign Up</h2>
          </div>
          <hr />
          <div class="form-content mt-5">
            <div class="input-field">
              <div class="input-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name "
                  v-model="state.name"
                />
                <span class="text-danger fw-bold" v-if="v$.name.$error">
                  {{ v$.name.$errors[0].$message }}
                </span>
              </div>
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
            <div class="input-field">
              <input
                type="password"
                name="password_confirm"
                placeholder="confirm password"
                v-model="state.passwordConfirm"
              />
              <span
                class="text-danger fw-bold"
                v-if="v$.passwordConfirm.$error"
              >
                {{ v$.passwordConfirm.$errors[0].$message }}
              </span>
            </div>
            <span class="text-muted"
              >already have an account ?
              <router-link
                :to="{ name: 'UserLogin' }"
                style="text-decoration: none"
                >login</router-link
              ></span
            >
            <div class="text-center mt-5">
              <button class="signup-btn">signup</button>
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
import { required, email, minLength, sameAs } from "@vuelidate/validators";
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

    onMounted(() => {
      if (state.customer) {
        router.push("/home");
      }
    });
    const state = reactive({
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      loading: false,
    });
    const rules = computed(() => {
      return {
        email: { required, email },
        name: { required },
        password: { required, minLength: minLength(6) },
        passwordConfirm: { required, sameAs: sameAs(state.password) },
      };
    });
    const v$ = useVuelidate(rules, state);

    const signup = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        state.loading = true;

        const data = {
          name: state.name,
          email: state.email,
          password: state.password,
        };

        try {
          await store.dispatch("customerSignup", data);
          toast.success("Account Created Successfully", {
            autoClose: 1000,
          });
        } catch (err) {
          toast.error(err, {
            autoClose: 1000,
          });
        }
        state.loading = false;
        router.push("/home");
      } else {
        toast.error("Invalid Data", {
          autoClose: 1000,
        });
      }
    };

    return { state, v$, signup };
  },
};
</script>

<style lang="scss" scoped>
.signup {
  margin-bottom: 100px;
  .signup-form {
    margin-top: 100px;
    form {
      width: 720px;
      margin: 0 auto;
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

        .signup-btn {
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
