<template>
  <form
    action=""
    class="cash tab-pane fade show"
    id="cash"
    role="tabpanel"
    aria-labelledby="cash-tab"
  >
    <div class="input-field">
      <label for="">Address inside Assiut</label>
      <input
        type="text"
        placeholder="city, street, building and apartment number"
        v-model="state.Address"
      />
    </div>
    <div class="input-field">
      <label for="">Receiver Name</label>
      <input type="text" placeholder="type the name" v-model="state.name" />
    </div>
    <div class="input-field">
      <label for="">Phone Number</label>
      <input
        type="number"
        placeholder="type the phone number"
        v-model="state.phone"
      />
    </div>

    <div class="confirm text-center">
      <button class="btn btn-dark w-100">Confirm</button>
    </div>
  </form>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      Address: "",
      name: "",
      phone: "",
    });
    const rules = computed(() => {
      return {
        Address: { required },
        name: { required },
        phone: {
          required,
          minLength: minLength(11),
          maxLength: maxLength(11),
        },
      };
    });
    const v$ = useVuelidate(rules, state);

    const buy = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
      } else {
      }
    };

    return { state, v$, buy };
  },
};
</script>

<style lang="scss" scoped>
.input-field {
  margin-bottom: 30px;
  label {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid var(--light-orange);
    transition: all 0.3s ease-out;
    &:focus {
      outline: none;
      transform: scale(1.05);
    }
  }
}
</style>
