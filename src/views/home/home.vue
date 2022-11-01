<template>
  <div class="home">
    <!-- 导航 -->
    <home-nav-bar />
    <div class="banner">
      <img src="../../assets/img/home/banner.webp" alt="" />
    </div>
    <!-- 搜素 -->
    <home-search-box />
    <home-categories />

    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar  />
    </div>

    <home-content />
    <!-- <button @click="more">加载更多</button> -->
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue'

import useHomeStore from "@/stores/modules/home";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import searchBar from '@/components/search-bar/search-bar.vue';
import useScroll from '@/hooks/useScroll.js'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHoustListData()

// 加载更多
// const more = () => {
//   console.log('加载更多资源')
//   homeStore.fetchHoustListData()
// }

// 监听滚动
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHoustListData().then(() => {
      isReachBottom.value = false
    })
  }
})

// const isShowSearchBar = ref(false)
// watch(scrollTop, (newValue) => {
//   isShowSearchBar.value = newValue > 100
// })

const isShowSearchBar = computed(() => {
  return scrollTop.value > 300
})


</script>

<style scoped lang="less">
.home {
  margin-bottom: 60px;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>