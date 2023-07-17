<template>
  <form @submit.prevent="changeEmail">
    <label>Email address</label>
    <input
      type="email"
      name="email"
      v-model="state.email"
      placeholder="mso@gmail.com"
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
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      email: "",
    });
    const rules = computed(() => {
      return {
        email: { required, email },
      };
    });
    const v$ = useVuelidate(rules, state);

    const changeEmail = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
      } else {
      }
    };

    return { state, v$, changeEmail };
  },
};
</script>

<style></style>
