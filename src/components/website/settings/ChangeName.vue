<template>
  <form @submit.prevent="changeName">
    <label>Name</label>
    <input
      type="text"
      name="name"
      v-model="state.name"
      :placeholder="existName"
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
import axios from "axios";
import { reactive, computed } from "vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";
export default {
  props: ["existName"],
  setup() {
    const store = useStore();
    const state = reactive({
      name: "",
    });
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(10) },
      };
    });
    const v$ = useVuelidate(rules, state);

    const changeName = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        try {
          const res = await axios.patch("/api/users/changeName", {
            name: state.name,
          });

          if (res.status == 200) {
            store.dispatch("updateName", { name: state.name });
            toast.success("Name updated successfully");
          } else {
            console.log(res);
            toast.error("Something went wrong, try again later");
          }
        } catch (err) {
          console.log(err);
          toast.error("Something went wrong, try again later");
        }
      } else {
        toast.warning("Type the new name", {
          autoClose: 1500,
        });
      }
    };

    return { state, v$, changeName };
  },
};
</script>

<style></style>
