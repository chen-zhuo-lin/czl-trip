import hyRequest from '../request'

export function getHotSuggestsData() {
  return hyRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategoriesData() {
  return hyRequest.get({
    url: "/home/categories"
  })
}

export function getHoustListData(currentPage) {
  return hyRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}