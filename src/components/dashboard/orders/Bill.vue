<template>
  <tr v-if="dell">
    <td class="check" @click="opened = !opened">
      <i v-if="opened" class="fa fa-circle-plus plus me-2"></i>
      <i v-else class="fa-solid fa-circle-minus minus me-2"></i>
      #{{ item._id.substring(0, 6) }}..
    </td>
    <td>{{ item.product.name }}</td>
    <td class="d-none d-lg-table-cell">
      <img :src="'http://localhost:8000/' + item.product.image" alt="" />
    </td>
    <td class="open d-none d-md-table-cell">${{ item.product.price }}</td>
    <td class="open">{{ item.qty }}</td>
    <td class="open">{{ item.product.price * item.qty }}</td>
  </tr>
  <tr class="close naming" v-if="!opened">
    <td colspan="9">
      <ul>
        <li>
          items's Id: <span>#{{ item._id }}</span>
        </li>
      </ul>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      opened: true,
      showEditForm: false,
      dell: true,
      id: 0,
    };
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
