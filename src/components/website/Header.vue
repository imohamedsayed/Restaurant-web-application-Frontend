<template>
  <header class="d-flex align-items-center justify-content-between mb-5">
    <div class="search">
      <input type="search" placeholder="Search" />
    </div>
    <div class="public d-flex align-items-center">
      <div class="img me-2">
        <img src="../../assets/user.jpg" alt="" />
      </div>
      <div class="info pe-2">
        <p class="m-0 fw-bold">Mohamed ElSayed</p>
        <span class="text-muted me-3">Customer</span>
        <span class="dropdown">
          <i
            class="fa-solid fa-chevron-down options"
            aria-expanded="false"
            type="button"
            data-bs-toggle="dropdown"
          ></i>
          <ul class="dropdown-menu me-5">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  .search {
    flex: 1;
    max-width: 40%;
    position: relative;
    &::after {
      font-family: "Font Awesome 6 Free";
      content: "\f002";
      position: absolute;
      left: 12px;
      color: #00000098;
      top: 7px;
      font-weight: 900;
    }
    input {
      width: 100%;
      height: 40px;
      padding: 10px;
      border: none;
      transition: all 0.3s ease-in-out;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding-left: 40px;

      &:focus {
        outline: none;
        font-size: 1.3rem;
      }
    }
  }
  .public {
    .img {
      img {
        border-radius: 50px;
        width: 50px !important;
        margin-right: 10px;
      }
    }
    .info {
      .options {
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 10px;
        border-radius: 50px;
        &:hover {
          box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
