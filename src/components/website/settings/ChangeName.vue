<template>
  <form @submit.prevent="changeName">
    <label>Name</label>
    <input
      type="text"
      name="name"
      v-model="state.name"
      placeholder="Mohamed El-Sayed"
    />
    <span class="text-danger d-block fw-bold mt-1" v-if="v$.name.$error">
      {{ v$.name.$errors[0].$message }}
    </span>
    <button>Change name</button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      name: "",
    });
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(10) },
      };
    });
    const v$ = useVuelidate(rules, state);

    const changeName = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
      } else {
      }
    };

    return { state, v$, changeName };
  },
};
</script>

<style></style>
