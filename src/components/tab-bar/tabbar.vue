<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" />
            <img v-else :src="getAssetURL(item.imageActive)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetURL } from "@/utils/get_assets_img.js";
import { ref, watch } from "vue";
import { useRoute } from 'vue-router'

// 监听路由改变
const route = useRoute();
const currentIndex = ref(0);
watch(route, (newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})
</script>

<style scoped lang="less">
.tab-bar {

  // 局部变量,tab-bar的子类会生效
  // --van-tabbar-item-icon-size:30px
  :deep(.van-tabbar-item__icon) {
    font-size: 100px;
  }

  img {
    height: 26px;
  }
}
</style>