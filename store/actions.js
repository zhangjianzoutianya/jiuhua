export function setAddressFunction({commit}, name) { // commit 提交；name即为点击后传递过来的参数，此时是 'A餐馆'
    return commit ('resturantName', name)
}
 