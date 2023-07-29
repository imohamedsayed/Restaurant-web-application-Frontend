<template>
  <form @submit.prevent="changeEmail">
    <label>Email address</label>
    <input
      type="email"
      name="email"
      v-model="state.email"
      :placeholder="existEmail"
    />
    <span class="text-danger d-block fw-bold mt-1" v-if="v$.email.$error">
      {{ v$.email.$errors[0].$message }}
    </span>
    <button>Change email</button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import axios from "axios";
import { reactive, computed, onMounted } from "vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";
export default {
  props: ["existEmail"],
  setup() {
    const store = useStore();
    const state = reactive({
      email: "",
    });
    const rules = computed(() => {
      return {
        email: { required, email },
      };
    });
    const v$ = useVuelidate(rules, state);

    const changeEmail = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        const res = await axios.patch("/api/users/changeEmail", {
          email: state.email,
        });

        if (res.status == 200) {
          store.dispatch("updateEmail", { email: state.email });
          toast.success("Email updated successfully");
        } else {
          const error = res.response.data.errors;
          if (error.email) toast.error(error.email);
        }
      } else {
        toast.error("Invalid or missing email address");
      }
    };

    return { state, v$, changeEmail };
  },
};
</script>

<style></style>
