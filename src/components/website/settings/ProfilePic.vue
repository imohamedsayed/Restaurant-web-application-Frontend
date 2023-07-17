<template>
  <div class="pic">
    <div class="profile-img">
      <img src="../../../assets/user.jpg" alt="" />
    </div>
    <label class="btn btn-dark" for="img-upload">Change picture</label>
    <input type="file" hidden id="img-upload" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pic {
  margin: 0 auto;
  text-align: center;
  .profile-img {
    img {
      width: 300px;
      padding: 10px;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }
    margin-bottom: 30px;
  }
}
</style>
