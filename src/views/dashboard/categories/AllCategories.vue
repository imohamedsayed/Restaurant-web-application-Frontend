<template>
  <div class="dash-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <h2 class="mb-5">
          <i class="fa-solid fa-clipboard-list me-2 fa-bounce"></i>Categories
        </h2>
        <div class="ground">
          <div class="up-area">
            <button>
              <i class="fa-solid fa-plus fa-beat me-2"></i> Add new category
            </button>
          </div>
          <table>
            <input
              type="search"
              class="search my-5"
              placeholder="search for category"
            />

            <thead>
              <th>ID</th>
              <th>Picture</th>
              <th>Category</th>
            </thead>
            <tbody>
              <tr>
                <td>#5241</td>
                <td>
                  <img
                    src="../../../assets/category/burger.svg"
                    class="img-fluid"
                    alt=""
                    width="80px"
                  />
                </td>
                <td>Burgers</td>
              </tr>
              <tr>
                <td>#5241</td>
                <td>
                  <img
                    src="../../../assets/category/burger.svg"
                    class="img-fluid"
                    alt=""
                    width="80px"
                  />
                </td>
                <td>Burgers</td>
              </tr>
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
export default {
  components: { SideBar, Header },
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
            background: #eba47040;
          }
        }
      }
    }
  }
}
</style>
