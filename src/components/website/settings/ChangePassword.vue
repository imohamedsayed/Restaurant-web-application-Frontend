<template>
  <form @submit.prevent="changePassword">
    <label>Old Password</label>
    <input type="password" name="old_password" v-model="state.oldPassword" />
    <span class="text-danger d-block fw-bold mt-1" v-if="v$.oldPassword.$error">
      {{ v$.oldPassword.$errors[0].$message }}
    </span>
    <label>New Password</label>
    <input type="password" name="old_password" v-model="state.newPassword" />
    <span class="text-danger d-block fw-bold mt-1" v-if="v$.newPassword.$error">
      {{ v$.newPassword.$errors[0].$message }}
    </span>
    <div class="alert alert-warning mt-3" v-if="state.passwordEquals">
      The new password must be different from the old one
    </div>
    <button>Change password</button>
  </form>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, not, sameAs } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      oldPassword: "",
      newPassword: "",
      passwordEquals: false,
    });
    const rules = computed(() => {
      return {
        oldPassword: { required, minLength: minLength(6) },
        newPassword: {
          required,
          minLength: minLength(6),
        },
      };
    });
    const v$ = useVuelidate(rules, state);

    const changePassword = () => {
      v$.value.$validate();

      if (!v$.value.$error) {
        if (state.newPassword === state.oldPassword) {
          state.passwordEquals = true;
          return;
        } else {
          state.passwordEquals = false;
        }
      } else {
      }
    };

    return { state, v$, changePassword };
  },
};
</script>

<style></style>
