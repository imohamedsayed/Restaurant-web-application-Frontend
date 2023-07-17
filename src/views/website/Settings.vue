<template>
  <div class="page-view">
    <SideBar />
    <main class="has-scrollbar">
      <Header />
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-4 col-12">
            <ProfilePic />
          </div>
          <div class="col-lg-8 col-md-6 col-12">
            <div class="info">
              <ChangeName />
              <ChangeEmail />
              <ChangePassword />
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
import ProfilePic from "@/components/website/settings/ProfilePic.vue";
import ChangeName from "@/components/website/settings/ChangeName.vue";
import ChangeEmail from "@/components/website/settings/ChangeEmail.vue";
import ChangePassword from "@/components/website/settings/ChangePassword.vue";
export default {
  components: {
    SideBar,
    Header,
    ProfilePic,
    ChangeName,
    ChangeEmail,
    ChangePassword,
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
  }
}
</style>
