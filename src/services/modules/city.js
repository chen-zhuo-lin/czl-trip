import hyRequest from '../request'
export function getCityAll() {
    // 网络请求,请求城市的数据
    return hyRequest.get({
        url: '/city/all'
    })
}