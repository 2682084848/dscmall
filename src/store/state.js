// 存数据
const state = {
    // 分类详情数据
    // 分类详情左侧数据
    categoryLeftDatas: [],
    // 分类详情右侧数据
    categoryRightDatas: [],
    ad: '',
    cat_id: "858",
    showloading: false,
    top_flag: false,
    // 分类详情数据
    categoryListDatas: [],
    toggleStyle: true,
    nomore: false,

    // 商品详情数据
    dateilSwipe: [],
    shareMask: false,
    shareTop: [],
    DateilNum: 1,
    // 本地储存购物车数据
    cartDatas: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    selectAll: localStorage["selectAll"] ? JSON.parse(localStorage["selectAll"]) : false,
    searchKeywords: localStorage["keywords"] ? JSON.parse(localStorage["keywords"]) : [],
    // 保存登录信息
    userInfo: localStorage["userInfo"] ? JSON.parse(localStorage["userInfo"]) : {}

}
export default state;
