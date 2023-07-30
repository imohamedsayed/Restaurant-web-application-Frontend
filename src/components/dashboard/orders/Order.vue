<template>
  <tr v-if="state.dell">
    <td class="check" @click="opened = !opened">
      <i v-if="opened" class="fa fa-circle-plus plus me-2"></i>
      <i v-else class="fa-solid fa-circle-minus minus me-2"></i>
      #{{ order._id.substring(0, 6) }}...
    </td>
    <td>{{ order.deliveryInfo.name }}</td>
    <td class="open">${{ order.total }}</td>
    <td class="open">
      <button
        class="btn btn-dark"
        @click="$router.push({ name: 'Bill', params: { id: order._id } })"
      >
        <i class="fa-solid fa-file-invoice me-3 fa-fade"></i>Bill
      </button>
    </td>
  </tr>
  <tr class="close naming" v-if="!opened && state.dell">
    <td colspan="9">
      <ul>
        <li>
          Order: <span>#{{ order._id }}</span>
        </li>
      </ul>
    </td>
  </tr>

  <tr v-if="!opened && state.dell">
    <td colspan="9">
      <div class="close">
        <ul class="options">
          <li class="btn text-danger" @click="deleteOrder">
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
  props: ["order"],
  data() {
    return {
      opened: true,
      showEditForm: false,
      id: 0,
    };
  },
  setup(props) {
    const state = reactive({
      dell: true,
    });

    const deleteOrder = async () => {
      try {
        const res = await axios.delete(
          "/api-dashboard/orders/" + props.order._id
        );

        if (res.status == 200) {
          state.dell = false;

          toast.success("Order deleted successfully", {
            autoClose: 2000,
          });
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error(
          "Something went wrong when deleting order, please try again"
        );
      }
    };

    return { state, deleteOrder };
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
