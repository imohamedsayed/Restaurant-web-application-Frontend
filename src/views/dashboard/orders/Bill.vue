<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-solid fa-file-invoice-dollar me-3 fa-bounce"></i>Bill
          #778745
        </h2>
        <div class="ground">
          <div class="up-area" style="letter-spacing: 5px">
            <h4>Origin : 350$</h4>
            <h4>Taxes : 14$</h4>
            <h4>Service : 25$</h4>
            <h2 class="mt-2 p-2">Total : 390$</h2>
            <hr />
          </div>
          <table>
            <thead>
              <th>Dish ID</th>
              <th>Item</th>
              <th class="d-none d-lg-table-cell">item's image</th>
              <th class="d-none d-md-table-cell">Price per unit</th>
              <th>Quantity</th>
              <th>total</th>
            </thead>
            <tbody>
              <Bill />
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";
import Bill from "../../../components/dashboard/orders/Bill.vue";
export default {
  components: { SideBar, Header, Bill },
};
</script>
<style lang="scss" scoped>
.dash-view {
  display: flex;
  main {
    height: calc(100vh - 0px);
    flex: 1;
    background: #fff;
    overflow: auto;
    padding-left: 18rem;
    @media (max-width: 572px) {
      margin: 0;
    }
    @media (max-width: 991px) {
      padding-left: 0;
    }

    h2 {
      font-weight: bold;
      letter-spacing: 3px;
      i {
        color: var(--dark-orange);
      }
    }
    .ground {
      padding: 40px;
      border-radius: 25px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      background: var(--bg-black-100);
      .up-area {
        margin-bottom: 30px;
        button {
          width: 220px;
          display: block;
          height: 40px;
          border: none;
          outline: none;
          background: linear-gradient(
            to bottom right,
            var(--light-orange),
            var(--dark-orange)
          );
          opacity: 0.9;
          border-radius: 10px;
          color: white;
          transition: all 0.3s ease;
          &:hover {
            opacity: 1;

            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
