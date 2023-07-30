<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-solid fa-file-invoice-dollar me-3 fa-bounce"></i>Bill #{{
            id
          }}
        </h2>
        <div class="ground">
          <div class="up-area" style="letter-spacing: 5px" v-if="state.order">
            <h4>Origin : {{ state.order.total - 75 }}$</h4>
            <h4>Taxes : 25$</h4>
            <h4>Service : 50$</h4>
            <h2 class="mt-2 p-2">Total : {{ state.order.total }}$</h2>
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
            <tbody v-if="state.items.length">
              <Bill v-for="item in state.items" :key="item._id" :item="item" />
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="6">
                  <p class="alert alert-warning">
                    <span class="spinner-grow spinner-grow-sm me-3"></span
                    >Loading bill items
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
  <teleport to="body"> <SpinnerLoading :loading="state.loading" /> </teleport>
</template>

<script>
import SideBar from "@/components/dashboard/SideBar.vue";
import Header from "@/components/dashboard/Header.vue";
import Bill from "../../../components/dashboard/orders/Bill.vue";
import { useRouter } from "vue-router";
import { reactive, computed, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import SpinnerLoading from "@/components/SpinnerLoading.vue";
import { toast } from "vue3-toastify";

export default {
  props: ["id"],
  components: { SideBar, Header, Bill, SpinnerLoading },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      user: computed(() => store.state.user),
      items: [],
      loading: false,
      order: "",
    });

    onMounted(async () => {
      state.loading = true;
      if (!state.user) {
        router.push("/");
      } else {
        if (!state.user.role) {
          router.push("/");
        }
      }

      try {
        const res = await axios.get("/api-dashboard/orders/" + props.id);

        if (res.status == 200) {
          state.order = res.data.order;
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error("Something went wrong when fetching order data");
      }
      try {
        const itemRes = await axios.get(
          "/api-dashboard/orders/items/" + props.id
        );

        if (itemRes.status == 200) {
          const itemsInOrder = itemRes.data.items;

          itemsInOrder.forEach(async (item) => {
            const product = await axios.get("/api/dishes/" + item._id);
            item.product = product.data.dish;
            state.items.push(item);
          });
        } else {
          toast.error(itemRes.data.message);
        }
      } catch (err) {
        toast.error("Something went wrong when fetching order data");
      }

      state.loading = false;
    });

    return { state };
  },
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
