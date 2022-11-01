<template>
    <div class="detail top-page">
    <tab-control :titles="[1,2,3]" v-if="showTabControl" class="tabs" />
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />

        <!-- 内容 -->
        <div class="main" v-if="mainPart">
            <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics" />
            <detail-infos :top-infos="mainPart.topModule" />
            <detail-facility :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility" />
            <detail-landlord :landlord="mainPart.dynamicModule.landlordModule" />
            <detail-comment :comment="mainPart.dynamicModule.commentModule" />
            <detail-notice :orderRules="mainPart.dynamicModule.rulesModule.orderRules" />
            <detail-map :position="mainPart.dynamicModule.positionModule" />
            <detail-intro :priceIntro="mainPart.introductionModule" />
        </div>
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">宏源旅途,永无止境!</div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { getDetailInfos } from "@/services"
import { ref, computed } from 'vue'
// 组件
import DetailSwipe from './cpns/detail_01-swipe.vue'
import DetailInfos from './cpns/detail_02-infos.vue'
import DetailFacility from './cpns/detail_03-facility.vue'
import DetailLandlord from './cpns/detail_04-landlord.vue'
import DetailComment from './cpns/detail_05-comment.vue'
import DetailNotice from './cpns/detail_06-notice.vue'
import DetailMap from './cpns/detail_07-map.vue'
import DetailIntro from './cpns/detail_08-intro.vue'
import TabControl from "@/components/tab-control/TabControl.vue"
import useScroll from "@/hooks/useScroll"

const route = useRoute()
const router = useRouter()

// 发送网络请求获取数据
const detailInfos = ref({})
const mainPart = computed(() => {
    return detailInfos.value.mainPart
})
getDetailInfos(route.params.id).then(res => {
    detailInfos.value = res.data
})

// 监听返回按钮的点击
const onClickLeft = () => {
    router.go(-1)
}

// tabControl相关的操作
const {scrollTop} = useScroll()
const showTabControl = computed(() => {
    return scrollTop > 300
})

</script>


<style lang="less" scoped>

.tabs{
    position: fixed;
    z-index: 9;
    left: 0;
    right:0;
    top:0;
}
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style>