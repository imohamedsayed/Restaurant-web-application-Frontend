<template>
  <tr v-if="item.product">
    <td>{{ item.product.name }}</td>
    <td>{{ item.product.price }}$</td>
    <td>{{ item.qty }}</td>
    <td>{{ item.qty * item.product.price }}$</td>
  </tr>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style></style>
