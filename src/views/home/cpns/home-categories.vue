<template>
    <div class="categories">
        <template v-for="(item,index) in categories">
            <div class="item">
                <img :src="item.pictureUrl" alt="" />
                <div>{{item.title}}</div>
            </div>
        </template>
    </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
    display: flex;
    overflow-x: auto;
    padding: 0 20px;
    height: 80px;

    &::-webkit-scrollbar {
        display: none;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70px;
        flex-shrink: 0;
        text-align: center;

        img {
            width: 32px;
            height: 32px;
        }
    }
}
</style>