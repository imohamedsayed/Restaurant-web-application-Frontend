<template>
  <div class="pic">
    <div class="profile-img">
      <img :src="'http://localhost:8000/' + existImage" alt="" />
      <span class="text-danger d-block fw-bold" v-if="v$.image.$error">
        {{ v$.image.$errors[0].$message }}
      </span>
    </div>
    <label class="btn btn-dark" for="img-upload">Change picture</label>
    <input
      type="file"
      hidden
      id="img-upload"
      @change="
        (e) => {
          state.image = e.target.files[0];
          changePic();
        }
      "
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, computed } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  props: ["existImage"],
  setup() {
    const store = useStore();
    const state = reactive({
      image: "",
    });

    const rules = computed(() => {
      return {
        image: { required },
      };
    });

    const v$ = useVuelidate(rules, state);

    const changePic = async () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        try {
          const res = await axios.patch(
            "/api/users/changePicture",
            { image: state.image },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (res.status == 200) {
            toast.success(res.data.message);
            store.dispatch("updateImage", { path: res.data.image });
          } else {
            toast.error("something went wrong, please try again and try again");
          }
        } catch (err) {
          toast.error("something went wrong, please try again and try again");
        }
      } else {
        toast.warning("You didn't upload the image");
      }
    };

    return { state, v$, changePic };
  },
};
</script>

<style lang="scss" scoped>
.pic {
  margin: 0 auto;
  text-align: center;
  .profile-img {
    img {
      width: 300px;
      padding: 10px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      height: 300px;
    }
    margin-bottom: 30px;
  }
}
</style>
