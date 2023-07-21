<template>
  <tr v-if="dell">
    <td class="check" @click="opened = !opened">
      <i v-if="opened" class="fa fa-circle-plus plus me-2"></i>
      <i v-else class="fa-solid fa-circle-minus minus me-2"></i>
      #779261
    </td>
    <td class="d-none d-lg-table-cell d-none d-md-table-cell">
      <img src="../../../assets/user.jpg" alt="" />
    </td>
    <td>Ahmed Ali</td>
    <td class="open d-none d-md-table-cell">ali@gmail.com</td>
  </tr>
  <tr class="close naming" v-if="!opened">
    <td colspan="9">
      <ul>
        <li>Customer : <span>Ahmed Ali</span></li>
      </ul>
    </td>
  </tr>

  <tr v-if="!opened && dell">
    <td colspan="9">
      <div class="close">
        <ul class="options">
          <li class="btn text-danger">
            <i class="fa fa-trash"></i> Delete Customer's Account
          </li>
          <li class="btn btn-info rounded-pill text-light">
            <i class="fa-solid fa-envelope"></i> Send a Message
          </li>
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
