// 提交 mutations是更改Vuex状态的唯一合法方法
export const setAddressFunction = (state, name) => { // A组件点击更改餐馆名称为 A餐馆
    state.resturantName = name // 把方法传递过来的参数，赋值给state中的resturantName
}
