<template>
  <form
    action=""
    class="cash tab-pane fade show"
    id="cash"
    role="tabpanel"
    aria-labelledby="cash-tab"
    @submit.prevent="buy"
  >
    <div class="input-field">
      <label for="">Address inside Assiut</label>
      <input
        type="text"
        placeholder="city, street, building and apartment number"
        v-model="state.Address"
      />
      <span class="text-danger" v-if="v$.Address.$error">
        {{ v$.Address.$errors[0].$message }}
      </span>
    </div>
    <div class="input-field">
      <label for="">Receiver Name</label>
      <input type="text" placeholder="type the name" v-model="state.name" />
      <span class="text-danger" v-if="v$.name.$error">
        {{ v$.name.$errors[0].$message }}
      </span>
    </div>
    <div class="input-field">
      <label for="">Phone Number</label>
      <input
        type="text"
        placeholder="type the phone number"
        v-model="state.phone"
      />
      <span class="text-danger" v-if="v$.phone.$error">
        {{ v$.phone.$errors[0].$message }}
      </span>
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
import { toast } from "vue3-toastify";
export default {
  emits: ["complete"],
  setup(props, ctx) {
    // const emit = defineEmit("complete");
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
        const customerInfo = {
          address: state.Address,
          name: state.name,
          phone: state.phone,
        };
        ctx.emit("complete", customerInfo);
      } else {
        toast.error("Invalid Credentials", {
          autoClose: 1500,
        });
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
