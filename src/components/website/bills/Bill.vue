<template>
  <div class="bill">
    <h3 class="mb-3">Order #77523</h3>
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Shrimp Boiled</td>
          <td>20$</td>
          <td>4</td>
          <td>80$</td>
        </tr>
        <tr>
          <td>Shrimp Boiled</td>
          <td>20$</td>
          <td>4</td>
          <td>80$</td>
        </tr>
        <tr>
          <td>Shrimp Boiled</td>
          <td>20$</td>
          <td>4</td>
          <td>80$</td>
        </tr>
        <tr>
          <td>Shrimp Boiled</td>
          <td>20$</td>
          <td>4</td>
          <td>80$</td>
        </tr>
      </tbody>
    </table>
    <div class="bill-total mt-4 fw-bold">
      <p>Origin : 80$</p>
      <p>taxes + service : 45$</p>
      <p>Total : 125$</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  text-align: center;

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
</style>
