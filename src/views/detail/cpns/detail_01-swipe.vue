<template>
    <div class="swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <template v-for="(item,index) in swipeData" :key="index">
                <van-swipe-item>
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </template>

            <template #indicator="{active,total}">
                <div class="custom-indicator">
                    <template v-for="(value,key,index) in swipeGroup" :key="key">
                        <span class="item" :class="{active:swipeData[active]?.enumPictureCategory == key}">
                            <span class="text">
                                {{getName(value[0].title)}}
                            </span>
                            <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                                {{getCategoryIndex(swipeData[active])+1}} / {{value.length}}
                            </span>
                        </span>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
const props = defineProps({
    swipeData: {
        type: Array,
        default: () => []
    }
})

// 对数据进行转换  key : value
const swipeGroup = {}

for (const item of props.swipeData) {
    let valueArray = swipeGroup[item.enumPictureCategory]
    if (!valueArray) {
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
}

const nameReg = /【(.*?)】/i
const getName = (name) => {
    const result = nameReg.exec(name)
    return result[1]
}

const getCategoryIndex = (item) =>{
    const valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(data => data === item)
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;

    img {
        width: 100%;
    }
}

.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    display: flex;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 1);
    color: #fff;

    .item {
        margin: 0 3px;

        &.active {
            padding: 0 3px;
            border-radius: 5px;
            background-color: #fff;
            color: #333;
        }
    }
}
</style>