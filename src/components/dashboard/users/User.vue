<template>
  <tr v-if="state.dell">
    <td class="check" @click="opened = !opened" v-if="user">
      <i v-if="opened" class="fa fa-circle-plus plus me-2"></i>
      <i v-else class="fa-solid fa-circle-minus minus me-2"></i>
      #{{ user._id.substring(-1, 5) }}...
    </td>
    <td class="d-none d-lg-table-cell d-none d-md-table-cell" v-if="user">
      <img :src="'http://localhost:8000/' + user.image" alt="" />
    </td>
    <td v-if="user">
      {{ user.name }}
      <span
        v-if="user.role"
        class="bg-info rounded-pill p-2 fs-6 text-light ms-1"
        >admin <b v-if="state.admin._id == user._id">(you)</b></span
      >
    </td>
    <td class="open d-none d-md-table-cell" v-if="user">{{ user.email }}</td>
  </tr>
  <tr class="close naming" v-if="!opened && state.dell">
    <td colspan="9" v-if="user">
      <ul>
        <li>
          Id : <span>{{ user._id }}</span>
        </li>
        <li>
          User : <span>{{ user.name }}</span>
        </li>
      </ul>
    </td>
  </tr>
  <tr v-if="!opened && state.dell">
    <td colspan="9">
      <div class="close" v-if="user">
        <ul class="options">
          <li
            class="btn text-danger"
            v-if="user.role != 1"
            @click="deleteAccount(user._id)"
          >
            <i class="fa fa-trash"></i> Delete Customer's Account
          </li>
          <li
            class="btn btn-success rounded-pill text-light"
            v-if="user.role == 0"
            @click="hire(user._id)"
          >
            <i class="fa fa-user"></i> hire as an admin
          </li>
          <li
            class="btn btn-warning rounded-pill text-light"
            v-if="state.admin._id != user._id"
          >
            <i class="fa-solid fa-envelope"></i> Send a Message
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { toast } from "vue3-toastify";
import axios from "axios";
export default {
  props: ["user"],
  data() {
    return {
      opened: true,
      showEditForm: false,
      id: 0,
    };
  },
  setup(props) {
    const store = useStore();
    const state = reactive({
      dell: true,
      admin: computed(() => store.state.user),
    });
    const deleteAccount = async (id) => {
      try {
        const res = await axios.delete("/api-dashboard/users/" + id);

        if (res.status == 200) {
          toast.success("User account deleted successfully");
          state.dell = false;
        } else {
          toast.error(res.response.data.message);
        }
      } catch (err) {
        toast.error("Something went wrong, please try again");
      }
    };
    const hire = async (id) => {
      try {
        const res = await axios.get("/api-dashboard/users/hire/" + id);
        if (res.status == 200) {
          toast.success("User hired as an admin");
          props.user.role = 1;
        } else {
          toast.error(res.response.data.message);
        }
      } catch (err) {
        toast.error("Something went wrong, please try again");
      }
    };
    return { state, deleteAccount, hire };
  },
};
</script>

<style lang="scss">
img {
  width: 80px;
}
i {
  cursor: pointer;
}
.naming {
  background: white !important;
}
.options {
  li {
    margin: 0 10px;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.25);
    }
  }
}
</style>
