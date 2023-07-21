<template>
  <tr v-if="dell">
    <td class="check" @click="opened = !opened">
      <i v-if="opened" class="fa fa-circle-plus plus me-2"></i>
      <i v-else class="fa-solid fa-circle-minus minus me-2"></i>
      #779261
    </td>
    <td>Ahmed Ali</td>
    <td class="open">$772.35</td>
    <td class="open">
      <button
        class="btn btn-dark"
        @click="$router.push({ name: 'Bill', params: { id: 1 } })"
      >
        <i class="fa-solid fa-file-invoice me-3 fa-fade"></i>Bill
      </button>
    </td>
  </tr>
  <tr class="close naming" v-if="!opened">
    <td colspan="9">
      <ul>
        <li>Order: <span>#777521</span></li>
      </ul>
    </td>
  </tr>

  <tr v-if="!opened && dell">
    <td colspan="9">
      <div class="close">
        <ul class="options">
          <li class="btn text-danger"><i class="fa fa-trash"></i> Delete</li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
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
