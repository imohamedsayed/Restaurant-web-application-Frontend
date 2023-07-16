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
            <div class="cart-item d-flex align-items-center gap-3 mb-4">
              <div class="img">
                <img
                  src="../../assets/dishes/shrimp.jpg"
                  class="img-fluid"
                  alt=""
                />
              </div>
              <div class="details">
                <h4 class="fw-bold mb-3">Boiled Shrimp</h4>
                <div
                  class="price-qty d-flex align-items-center justify-content-between"
                >
                  <p class="price fw-bold m-0">13.00$</p>
                  <div class="qty">
                    <button class="btn minus">-</button>
                    <input
                      type="number"
                      min="1"
                      style="width: 50px"
                      class="mx-2"
                    />
                    <button class="btn add">+</button>
                  </div>
                </div>
              </div>
              <i class="fa-solid fa-trash remove"></i>
            </div>
            <div class="cart-item d-flex align-items-center gap-3 mb-4">
              <div class="img">
                <img
                  src="../../assets/dishes/shrimp.jpg"
                  class="img-fluid"
                  alt=""
                  width="200px"
                />
              </div>
              <div class="details">
                <h4 class="fw-bold mb-3">Boiled Shrimp</h4>
                <div
                  class="price-qty d-flex align-items-center justify-content-between"
                >
                  <p class="price fw-bold m-0">13.00$</p>
                  <div class="qty">
                    <button class="btn minus">-</button>
                    <input
                      type="number"
                      min="1"
                      style="width: 50px"
                      class="mx-2"
                    />
                    <button class="btn add">+</button>
                  </div>
                </div>
              </div>
              <i class="fa-solid fa-trash remove"></i>
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
                    class="visa-options nav-link active"
                    id="online-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#online"
                    type="button"
                    role="tab"
                    aria-controls="online"
                    aria-selected="true"
                  >
                    <i class="fa-solid fa-credit-card"></i>
                    Pay Online
                  </li>
                  <li
                    class="cash-options nav-link"
                    id="cash-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cash"
                    type="button"
                    role="tab"
                    aria-controls="cash"
                    aria-selected="true"
                  >
                    <i class="fa-solid fa-money-bills"></i>
                    Pay cash
                  </li>
                </ul>
              </div>

              <div class="confirm-order mt-5 tab-content" id="myTabContent">
                <form
                  action=""
                  class="online tab-pane fade show active"
                  id="online"
                  role="tabpanel"
                  aria-labelledby="online-tab"
                >
                  <div class="input-field">
                    <label for="">Name on card</label>
                    <input type="text" placeholder="name on the card" />
                  </div>
                  <div class="input-field">
                    <label for="">Card Number</label>
                    <input type="number" placeholder="card number" />
                  </div>
                  <div class="input-field">
                    <label for="">Expiration date</label>
                    <input type="month" />
                  </div>
                  <div class="input-field">
                    <label for="">CVC</label>
                    <input type="number" placeholder="CVC" max="999" />
                  </div>
                  <div class="confirm text-center">
                    <button class="btn btn-dark w-100">Confirm</button>
                  </div>
                </form>
                <form
                  action=""
                  class="cash tab-pane fade show"
                  id="cash"
                  role="tabpanel"
                  aria-labelledby="cash-tab"
                >
                  <div class="input-field">
                    <label for="">Address inside Assiut</label>
                    <input
                      type="text"
                      placeholder="city, street, building and apartment number"
                    />
                  </div>
                  <div class="input-field">
                    <label for="">Receiver Name</label>
                    <input type="text" placeholder="type the name" />
                  </div>
                  <div class="input-field">
                    <label for="">Phone Number</label>
                    <input type="number" placeholder="type the phone number" />
                  </div>

                  <div class="confirm text-center">
                    <button class="btn btn-dark w-100">Confirm</button>
                  </div>
                </form>
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
export default {
  components: { SideBar, Header },
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
    .row {
      margin-top: 100px;
      .cart-item {
        position: relative;
        .img {
          img {
            border-radius: 10px;
            width: 200px;
            height: 140px;
          }
        }
        .details {
          flex: 1;
          .qty {
            input {
              height: 35px;
            }
            button {
              opacity: 0.7;
              transition: all 0.3s ease;
              &:hover {
                opacity: 1;
                transform: scale(1.09);
              }
              &.minus {
                border: 1px solid #000;
              }
              &.add {
                background: var(--dark-orange);
                color: #fff;
              }
            }
          }
        }
        .remove {
          position: absolute;
          right: 10px;
          top: 10px;
          color: crimson;
          font-size: 1.3rem;
          cursor: pointer;
          opacity: 0.5;
          transition: all 0.3s ease;
          &:hover {
            opacity: 1;
            transform: scale(1.2);
          }
        }
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
        .confirm-order {
          .input-field {
            margin-bottom: 30px;
            label {
              display: block;
              font-size: 1.2rem;
              font-weight: 700;
              margin-bottom: 10px;
            }
            input {
              width: 100%;
              height: 30px;
              border-radius: 10px;
              padding-left: 10px;
              border: none;
              border-bottom: 1px solid var(--light-orange);
              transition: all 0.3s ease-out;
              &:focus {
                outline: none;
                transform: scale(1.05);
              }
            }
          }
        }
      }
    }
  }
}
</style>
