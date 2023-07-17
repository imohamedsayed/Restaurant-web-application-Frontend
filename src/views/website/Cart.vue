<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <h3 class="fw-bold mb-3">Current Order</h3>
            <hr />
            <div class="products has-scrollbar pe-2">
              <Product />
              <Product />
              <Product />
            </div>
            <hr />
            <div class="mt-5 money text-sm-center">
              <ul class="list-unstyled">
                <li><p>Origin : 350$</p></li>
                <li><p>Taxes : 25$</p></li>
                <li><p>Service : 50$</p></li>
                <li><p class="total fw-bold">Total : 425$</p></li>
              </ul>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="payment-details">
              <div class="options">
                <ul
                  class="list-unstyled p-0 nav nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li
                    class="visa-options nav-link active mb-3"
                    id="online-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#online"
                    type="button"
                    role="tab"
                    aria-controls="online"
                    aria-selected="true"
                  >
                    <i class="fa-solid fa-credit-card fa-beat-fade"></i>
                    Pay Online
                  </li>
                  <li
                    class="cash-options nav-link mb-3"
                    id="cash-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cash"
                    type="button"
                    role="tab"
                    aria-controls="cash"
                    aria-selected="true"
                  >
                    <i class="fa-solid fa-money-bills fa-shake"></i>
                    Pay cash
                  </li>
                </ul>
              </div>

              <div class="confirm-order mt-5 tab-content" id="myTabContent">
                <OnlinePaymentForm />
                <CashPaymentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import OnlinePaymentForm from "@/components/website/cart/OnlinePaymentForm.vue";
import CashPaymentForm from "@/components/website/cart/CashPaymentForm.vue";
import Product from "@/components/website/cart/Product.vue";
export default {
  components: { SideBar, Header, OnlinePaymentForm, CashPaymentForm, Product },
};
</script>

<style lang="scss" scoped>
.page-view {
  display: flex;
  background: #000 !important;
  main {
    margin: 20px 0;
    height: calc(100vh - 40px);
    flex: 1;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    overflow: auto;
    @media (max-width: 572px) {
      padding-bottom: 60px;
      border-radius: 0px;
      margin: 0;
    }
    .row {
      margin-top: 100px;
      .products {
        height: 36vh;
        overflow: auto;
      }
      .money {
        li {
          font-size: 1.4rem;
          letter-spacing: 4px;
          .total {
            font-size: 1.6rem;
            padding: 10px;
            position: relative;
            &::before {
              content: "";
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              height: 3px;
              width: 250px;
              background: var(--light-orange);
            }
          }
        }
      }

      .payment-details {
        margin: 0 auto;
        padding: 40px;
        .options {
          ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            li {
              padding: 20px;
              font-size: 1.2rem;
              text-align: center;
              border: 1px solid var(--light-orange);
              border-radius: 10px;
              transition: all 0.3s ease;
              cursor: pointer;
              color: #111;
              &:hover {
                color: #fff !important;
                background: var(--light-orange) !important;
              }
              &.active {
                color: #fff !important;
                background: var(--light-orange) !important;
              }
              i {
                display: block;
                margin-bottom: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
