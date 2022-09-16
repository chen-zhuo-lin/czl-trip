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
    <!-- <template v-for="(item, index) in tabbarData" :key="index">
      <div class="tab-bar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(index,item)"
      >
        <img
          v-if="currentIndex !== index"
          :src="getAssetURL(item.image)"
          alt=""
        />
        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js";
import { getAssetURL } from "@/utils/get_assets_img.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const currentIndex = ref(0);
const router = useRouter();

// const itemClick = (index, item) => {
//   currentIndex.value = index;
//   router.push({
//     path: item.path,
//   });
// };
</script>

<style scoped lang="less">
  .tab-bar{
    // 局部变量,tab-bar的子类会生效
    // --van-tabbar-item-icon-size:30px
    :deep(.van-tabbar-item__icon){
      font-size: 100px;
    }
    img{
      height: 26px;
    }
  }
</style>