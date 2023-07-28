<template>
  <div class="cat-list">
    <table>
      <thead>
        <th>ID</th>
        <th>Picture</th>
        <th>Category</th>
        <th></th>
      </thead>
      <tbody v-if="categories.length">
        <Category
          v-for="category in categories"
          :key="category._id"
          :category="category"
        />
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="3">
            <p class="alert alert-warning">You have no categories yet</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Category from "./Category.vue";
export default {
  components: { Category },
  props: ["categories"],
};
</script>

<style lang="scss">
input {
  width: 50%;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 10px;
  border: none;
  outline: none;
  border: 1px solid var(--light-orange);
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  &:focus {
    font-size: 1.2rem;
  }
}
table {
  width: 100%;
  thead {
    background: var(--dark-orange);
    font-size: 1.2rem;
    color: white;
    th {
      padding: 5px 10px;
    }
  }
  tr {
    background: #fff;
    td {
      padding: 5px 10px;
      font-size: 1.2rem;
      font-weight: 600;
    }
    &:nth-child(even) {
      background: #eba47040;
    }
    transition: all 0.3s ease;
    &:hover {
      background: #dad9d940;
    }
  }
}
</style>
