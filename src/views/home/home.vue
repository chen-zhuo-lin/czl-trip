<template>
  <div class="home">
    <!-- 导航 -->
    <home-nav-bar />
    <div class="banner">
      <img src="../../assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import HomeNavBar from "./cpns/home-nav-bar.vue";
</script>

<style scoped lang="less">
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
    }
    .position {
      display: flex;
      align-items: center;
      width: 80px;

      .text {
        font-size: 12px;
      }

      img {
        position: relative;
        top: -2px;
        margin-left: 5px;
        width: 18px;
        height: 18px;
      }
    }
  }
}
</style>