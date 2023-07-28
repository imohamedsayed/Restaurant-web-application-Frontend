<template>
  <tr v-if="state.dell">
    <td class="check" @click="opened = !opened">
      <i v-if="opened" class="fa fa-circle-plus plus me-2"></i>
      <i v-else class="fa-solid fa-circle-minus minus me-2"></i>
      #{{ category._id.substring(-1, 5) }}...
    </td>
    <td>
      <img
        :src="'http://localhost:8000/' + category.image"
        class="img-fluid"
        alt=""
      />
    </td>
    <td class="open">{{ category.name }}</td>
    <td class="open">
      <button
        class="btn btn-dark"
        @click="
          $router.push({ name: 'CatDishes', params: { id: category._id } })
        "
      >
        <i class="fa-solid fa-eye me-2 fa-shake"></i>Show dishes
      </button>
    </td>
  </tr>
  <tr class="close naming" v-if="!opened && state.dell">
    <td colspan="9">
      <ul>
        <li>
          category: <span>{{ category.name }}</span>
        </li>
        <li>
          Id: <span>{{ category._id }}</span>
        </li>
      </ul>
    </td>
  </tr>
  <tr v-if="!opened && state.dell">
    <td colspan="9">
      <div class="close">
        <ul class="options">
          <li
            class="btn text-info-emphasis"
            @click="
              $router.push({
                name: 'EditCategory',
                params: { id: category._id },
              })
            "
          >
            <i class="fa fa-trash"></i> Edit
          </li>
          <li class="btn text-danger" @click="deleteCat(category._id)">
            <i class="fa fa-trash"></i> Delete
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { toast } from "vue3-toastify";
export default {
  data() {
    return {
      opened: true,
      showEditForm: false,
      id: 0,
    };
  },
  props: ["category"],
  setup(props) {
    const state = reactive({
      dell: true,
    });
    const deleteCat = async (id) => {
      try {
        const res = await axios.delete("/api-dashboard/category/" + id);

        if (res.status == 200) {
          toast.success("category deleted successfully", {
            autoClose: 2000,
          });
          state.dell = false;
        } else {
          toast.error(res.response.data.message);
        }
      } catch (err) {
        toast.error("something went wrong, try again later", {
          autoClose: 1500,
        });
      }
    };
    return { deleteCat, state };
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
