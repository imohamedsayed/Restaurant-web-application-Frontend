<template>
  <form
    action=""
    class="online tab-pane fade show active"
    id="online"
    role="tabpanel"
    aria-labelledby="online-tab"
    @submit.prevent="buy"
  >
    <div class="input-field">
      <label for="">Address</label>
      <input
        type="text"
        placeholder="name on the card"
        v-model="state.address"
      />
      <span class="text-danger" v-if="v$.address.$error">
        {{ v$.address.$errors[0].$message }}
      </span>
    </div>
    <div class="input-field">
      <label for="">Phone Number</label>
      <input type="text" placeholder="name on the card" v-model="state.phone" />
      <span class="text-danger" v-if="v$.phone.$error">
        {{ v$.phone.$errors[0].$message }}
      </span>
    </div>
    <div class="input-field">
      <label for="">Name on card</label>
      <input type="text" placeholder="name on the card" v-model="state.name" />
      <span class="text-danger" v-if="v$.name.$error">
        {{ v$.name.$errors[0].$message }}
      </span>
    </div>
    <div class="input-field">
      <label for="">Card Number</label>
      <input
        type="number"
        placeholder="card number"
        v-model="state.cardNumber"
      />
      <span class="text-danger" v-if="v$.cardNumber.$error">
        {{ v$.cardNumber.$errors[0].$message }}
      </span>
    </div>
    <div class="input-field">
      <label for="">Expiration date</label>
      <input type="month" v-model="state.expirationDate" />
      <span class="text-danger" v-if="v$.expirationDate.$error">
        {{ v$.expirationDate.$errors[0].$message }}
      </span>
    </div>
    <div class="input-field">
      <label for="">CVC</label>
      <input type="number" placeholder="CVC" max="999" v-model="state.cvc" />
      <span class="text-danger" v-if="v$.cvc.$error">
        {{ v$.cvc.$errors[0].$message }}
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
    const state = reactive({
      name: "",
      cardNumber: "",
      expirationDate: "",
      cvc: "",
      address: "",
      phone: "",
    });
    const rules = computed(() => {
      return {
        name: { required },
        address: { required },
        phone: { required, minLength: minLength(11), maxLength: maxLength(11) },
        cardNumber: {
          required,
          minLength: minLength(16),
          maxLength: maxLength(16),
        },
        expirationDate: { required },
        cvc: { required, minLength: minLength(3), maxLength: maxLength(3) },
      };
    });
    const v$ = useVuelidate(rules, state);

    const buy = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        const data = {
          name: state.name,
          address: state.address,
          phone: state.phone,
          cardNumber: state.cardNumber,
          expirationDate: state.expirationDate,
          cvc: state.cvc,
        };

        ctx.emit("complete", data);
      } else {
        toast.error("Invalid credentials");
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
