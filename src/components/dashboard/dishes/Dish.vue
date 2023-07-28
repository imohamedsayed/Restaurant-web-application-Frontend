<template>
  <tr v-if="state.dell">
    <td class="check" @click="opened = !opened">
      <i v-if="opened" class="fa fa-circle-plus plus me-2"></i>
      <i v-else class="fa-solid fa-circle-minus minus me-2"></i>
      #{{ dish._id.substring(-1, 5) }}...
    </td>
    <td>
      <img
        :src="'http://localhost:8000/' + dish.image"
        class="img-fluid"
        alt=""
      />
    </td>
    <td class="open">{{ dish.name }}</td>
    <td class="open">{{ dish.price }}</td>
  </tr>
  <tr class="close naming" v-if="!opened && state.dell">
    <td colspan="9">
      <ul>
        <li>
          Id: <span>{{ dish._id }}</span>
        </li>
        <li>
          Dish: <span>{{ dish.name }}</span>
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
              $router.push({ name: 'EditDish', params: { id: dish._id } })
            "
          >
            <i class="fa fa-trash"></i> Edit
          </li>
          <li class="btn text-danger" @click="deleteDish(dish._id)">
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
  props: ["dish"],
  data() {
    return {
      opened: true,
      showEditForm: false,
      id: 0,
    };
  },
  setup() {
    const state = reactive({
      dell: true,
    });
    const deleteDish = async (id) => {
      try {
        const res = await axios.delete("/api-dashboard/dishes/" + id);

        if (res.status == 200) {
          toast.success("Dish deleted successfully", {
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
    return { deleteDish, state };
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
