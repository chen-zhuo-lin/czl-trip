<template>
  <div class="app">
    <router-view />
    <tab-bar v-if="!route.meta.hideTabBar" />
    <!-- <tab-bar/> -->
    <loading />
  </div>
</template>

<script setup>
import TabBar from "./components/tab-bar/tabbar.vue";
import { useRoute } from "vue-router";
import Loading from "./components/loading/loading.vue";

const route = useRoute()
</script>


<style scoped>

</style>
