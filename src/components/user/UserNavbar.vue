<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="">
          <a class="navbar-brand text-black d-flex align-items-center"  href="#">
            <img src="../../assets/images/travel_icon.png"
            class="me-2" alt="logo" width="30" height="30">
            <h1 class="h2 mb-n1" style="margin-bottom: 0">微 ‧ 旅行</h1>
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link text-black a-hover"
              to="/products">跟團遊</router-link>
            </li>
            <li class="nav-item ">
              <router-link class="nav-link text-black a-hover"
              to="/dashboard/coupons">優惠券</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black a-hover"
              to="/myfavorite">我的最愛</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-black a-hover"
              to="/ordersearch">訂單查詢</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link  text-black a-hover" to="/cart">
                <i class="bi bi-cart3  d-none d-lg-block"></i>
                <span class="d-lg-none">購物車</span>
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link text-black a-hover" type="button"
              @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

