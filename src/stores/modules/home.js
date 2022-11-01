import { defineStore } from 'pinia'
import { getHotSuggestsData, getCategoriesData, getHoustListData } from "@/services/modules/home"

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        currentPage:1,
        houstList: []
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHotSuggestsData()
            this.hotSuggests = res.data
        },
        async fetchCategoriesData() {
            const res = await getCategoriesData()
            this.categories = res.data
        },
        async fetchHoustListData() {
            const res = await getHoustListData(this.currentPage)
            this.houstList.push(...res.data)
            this.currentPage++
        },
    }
})

export default useHomeStore