<template>
  <div class="bill">
    <h3 class="mb-3">Order #{{ order._id.substring(0, 6) }}...</h3>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody v-if="state.items.length">
        <BillItem v-for="item in state.items" :key="item._id" :item="item" />
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="4">
            <p class="alert alert-warning">
              <span class="spinner-grow spinner-grow-sm"></span>
              Loading items ..
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="bill-total mt-4 fw-bold">
      <p>Origin : {{ order.total - 75 }}$</p>
      <p>taxes + service : 75$</p>
      <p>Total : {{ order.total }}$</p>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
import BillItem from "./BillItem.vue";
export default {
  components: { BillItem },
  props: ["order"],
  setup(props) {
    const state = reactive({
      items: [],
    });
    onMounted(async () => {
      const itemsInOrder = props.order.items;

      itemsInOrder.forEach(async (item) => {
        const product = await axios.get("/api/dishes/" + item._id);
        item.product = product.data.dish;
      });

      state.items = itemsInOrder;
    });

    return { state };
  },
};
</script>

<style lang="scss" scoped>
.bill {
  background: #ececec5e;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

  table {
    width: 100%;
    text-align: center;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    thead {
      background: var(--dark-orange) !important;
      color: white;
      font-size: 1.2rem;
      margin-bottom: 10x;
      tr {
        background: var(--dark-orange) !important;
      }
      th {
        padding: 5px;
      }
    }
    tbody {
      tr {
        &:nth-child(even) {
          background: rgba(138, 135, 135, 0.172);
        }
      }
    }
  }
}
</style>
