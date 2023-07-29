<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row justify-content-between" v-if="state.user">
          <div class="col-lg-4 col-md-4 col-12">
            <ProfilePic :existImage="state.user.image" />
          </div>
          <div class="col-lg-8 col-md-6 col-12">
            <div class="info">
              <ChangeName :existName="state.user.name" />
              <ChangeEmail :existEmail="state.user.email" />
              <ChangePassword />
            </div>
          </div>
        </div>
        <div class="not-authorized text-center" v-else>
          <img src="../../assets/settings.svg" class="img-fluid" alt="" />
          <h1>You are not allowed to access this page</h1>
          <h5>Login to your account so you can see your account settings</h5>
          <button @click="$router.push('/login')">Login</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SideBar from "@/components/website/SideBar.vue";
import Header from "@/components/website/Header.vue";
import ProfilePic from "@/components/website/settings/ProfilePic.vue";
import ChangeName from "@/components/website/settings/ChangeName.vue";
import ChangeEmail from "@/components/website/settings/ChangeEmail.vue";
import ChangePassword from "@/components/website/settings/ChangePassword.vue";
import { useStore } from "vuex";
import { computed, reactive } from "vue";
export default {
  components: {
    SideBar,
    Header,
    ProfilePic,
    ChangeName,
    ChangeEmail,
    ChangePassword,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      user: computed(() => store.state.user),
    });

    return { state };
  },
};
</script>

<style lang="scss">
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

      .info {
        form {
          margin: 30px 0;
          input {
            width: 100%;
          }
          label {
            display: block;
            font-size: 1.2rem;
            font-weight: 700;
            margin: 20px 0;
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

          button {
            margin-top: 20px;

            width: 170px;
            height: 35px;
            border: none;
            outline: none;
            background: linear-gradient(
              to bottom right,
              var(--dark-orange),
              var(--light-orange)
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
    .not-authorized {
      img {
        width: 400px;
      }
      margin-top: 100px;
      font-weight: bold;
      h5 {
        font-weight: 600;
      }
      button {
        margin-top: 10px;
        width: 120px;
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
</style>
