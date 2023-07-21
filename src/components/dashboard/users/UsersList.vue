<template>
  <div class="cat-list">
    <input
      type="search"
      class="search my-5"
      placeholder="search for a customer"
    />
    <table>
      <thead>
        <th>ID</th>
        <th class="d-none d-md-table-cell">Pic</th>
        <th>Name</th>
        <th class="d-none d-md-table-cell">Email</th>
      </thead>
      <tbody>
        <User />
      </tbody>
    </table>
  </div>
</template>

<script>
import User from "./User.vue";
export default {
  components: { User },
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
