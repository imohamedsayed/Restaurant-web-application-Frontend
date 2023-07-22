<template>
  <tr v-if="dell">
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
  </tr>
  <tr class="close naming" v-if="!opened">
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
  <tr v-if="!opened && dell">
    <td colspan="9">
      <div class="close">
        <ul class="options">
          <li
            class="btn text-info-emphasis"
            @click="$router.push({ name: 'EditCategory', params: { id: 1 } })"
          >
            <i class="fa fa-trash"></i> Edit
          </li>
          <li class="btn text-danger"><i class="fa fa-trash"></i> Delete</li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import { onMounted } from "vue";
export default {
  data() {
    return {
      opened: true,
      showEditForm: false,
      dell: true,
      id: 0,
    };
  },
  props: ["category"],
  setup(props) {},
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
