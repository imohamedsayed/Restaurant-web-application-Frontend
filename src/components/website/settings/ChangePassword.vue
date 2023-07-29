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
import axios from "axios";
import { reactive, computed } from "vue";
import { toast } from "vue3-toastify";
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

    const changePassword = async () => {
      v$.value.$validate();

      if (!v$.value.$error) {
        if (state.newPassword === state.oldPassword) {
          state.passwordEquals = true;
          return;
        } else {
          const res = await axios.patch("/api/users/changePassword", {
            oldPass: state.oldPassword,
            newPass: state.newPassword,
          });

          if (res.status == 200) {
            toast.success("Password updated successfully", {
              autoClose: 2000,
            });
          } else {
            const error = res.response.data.errors;
            if (error.password) toast.error(error.password);
            else toast.error(res.response.data.message);
          }

          try {
          } catch (err) {
            toast.error("Something went wrong, try again later");
          }

          state.passwordEquals = false;
        }
      } else {
        toast.error("Invalid or missing data", {
          autoClose: 1000,
        });
      }
    };

    return { state, v$, changePassword };
  },
};
</script>

<style></style>
