<template>
  <div class="city-group">
    <van-index-bar :sticly="false" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <div class="city" @click="cityClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>

      <template v-for="(group, index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>

  </div>
</template>
  
<script setup>
import { computed } from "vue";
import  useCityStore  from "@/stores/modules/city";
import { useRouter } from "vue-router";

const router = useRouter()

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

const cityStore = useCityStore();
const cityClick = (city) => {
  cityStore.currentCity = city;
  router.go(-1)
  
};
</script>
  
<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 78px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>